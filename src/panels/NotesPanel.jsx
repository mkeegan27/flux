import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import moment from 'moment';
import Lang from 'lodash';

import FluxNotesEditor from '../notes/FluxNotesEditor';
import Button from '../elements/Button';
import NoteAssistant from '../notes/NoteAssistant';
import NoteParser from '../noteparser/NoteParser';
import './NotesPanel.css';
import PointOfCare from '../notes/PointOfCare';
import { createSentenceFromStructuredData } from '../shortcuts/ShortcutUtils';

export default class NotesPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // updatedEditorNote is the note to be loaded in the editor
            updatedEditorNote: null,
            noteAssistantMode: "context-tray",
            // selectedNote is the note that is selected in the clinical notes view in the NoteAssistant
            selectedNote: null,
            currentlyEditingEntryId: -1,
            arrayOfPickLists: [],
            contextTrayItemToInsert: null,
            localDocumentText: '',
            showTemplateView: false,
            selectedPickListOptions: [],
            shouldRevertTemplate: false,
            shouldUpdateShortcutType: false,
            shortcutKey: null,
            shortcutType: null,
        };

        this.noteParser = new NoteParser(this.props.shortcutManager, this.props.contextManager);
    }

    componentWillReceiveProps = (nextProps) => {
        // Logic to handle switching notes
        if (!Lang.isNull(nextProps.openClinicalNote) && this.props.openClinicalNote !== nextProps.openClinicalNote) {
            if (!Lang.isNull(this.props.openClinicalNote)) {
                this.updateContextTrayItemToInsert(null);
            }
            this.saveNote(this.state.localDocumentText);
            this.handleUpdateEditorWithNote(nextProps.openClinicalNote);
        }
    }

    insertStructuredPhraseInCurrentNote = (data, source) => {
        if (this.state.noteAssistantMode === 'poc') {
            return this.pointOfCare.insertStructuredPhrase(data, source);
        } else if (this.props.isNoteViewerVisible && this.props.isNoteViewerEditable && this.state.selectedNote) {
            const metadata = this.props.shortcutManager.getMetadataForTrigger(`#${data.phrase}`);
            if (Lang.isUndefined(metadata)) return "No structured phrase named '" + data.phrase + "' found.";
            const structuredPhrase = createSentenceFromStructuredData(
                metadata["structuredPhrase"], 
                (name) => {
                    const foundItem = data.fields.find((item) => item.name === name);
                    if (Lang.isUndefined(foundItem)) return undefined;
                    return foundItem.value;
                },
                `#${data.phrase}`);
            this.props.handleSummaryItemSelected(structuredPhrase, -1, source);
            return null;
        } else {
            return "Received command to insert structured phrase but no valid note to insert it into right now.";
        }
    }

    updateShowTemplateView = (showTemplateView) => {
        this.setState({ showTemplateView });
    }

    updateLocalDocumentText = (text) => {      
        if (text) {
            this.setState({showTemplateView: false});
        } 
        this.setState({ localDocumentText: text });
    }

    updateNoteAssistantMode = (mode) => {
        this.setState({noteAssistantMode: mode});
    }

    updateSelectedNote = (note) => {
        this.setState({selectedNote: note});
    }

    updateContextTrayItemToInsert = (contextTrayItem) => {
        this.setState({ contextTrayItemToInsert: contextTrayItem });
        this.setState({showTemplateView: false});
    }

    updateSelectedPickListOptions = (selectedPickListOptions) => {
        this.setState({ selectedPickListOptions });
    }

    // Handle when the editor needs to be updated with a note. The note can be a new blank note or a pre existing note
    handleUpdateEditorWithNote = (note) => {
        // If in pre-encounter mode and the note editor doesn't exist, update the layout and add the editor
        if (!Lang.isNull(note)) {
            // *Note: setFullAppStateWithCallback is used instead of setFullAppState because the editor needs to be created
            // before editor related states can be set
            this.props.setFullAppStateWithCallback({
                layout: 'split',
                isNoteViewerVisible: true,
                isNoteViewerEditable: !note.signed,
                noteClosed: false
            }, () => {
                const mode = note.signed ? "clinical-notes" : "context-tray";
                this.setState({
                    selectedNote: note,
                    updatedEditorNote: note,
                    noteAssistantMode: mode,
                    currentlyEditingEntryId: parseInt(note.entryInfo.entryId, 10),
                    localDocumentText: note.content
                });
                this.props.setOpenClinicalNote(note);
            });
        }
    }

    handleUpdateArrayOfPickLists = (array) => {
        this.setState({arrayOfPickLists: array})
    }

    updateNote = (entryId, noteContent) => {
        // Only update if there is a note in progress
        if (!Lang.isEqual(entryId, -1)) {
            // List the notes to verify that they are being updated each invocation of this function:
            var noteToUpdate = this.props.patient.getNotes().find(function (element) {
                return Lang.isEqual(element.entryInfo.entryId, entryId);
            });
            if (!Lang.isNull(noteToUpdate) && !Lang.isUndefined(noteToUpdate) && !noteToUpdate.signed) {
                noteToUpdate.content = noteContent;
                this.props.patient.updateExistingEntry(noteToUpdate);
                this.updateSelectedNote(noteToUpdate);
            }
        }
    }

    updateExistingNote = (noteContent) => {
        this.updateNote(this.state.currentlyEditingEntryId, noteContent);
    }

    // Save a note
    saveNote = (noteContent) => {
        if (this.state.currentlyEditingEntryId !== -1) {
            this.updateExistingNote(noteContent);
        }
    }

    // Close a note
    closeNote = () => {
        this.updateContextTrayItemToInsert(null);
        this.props.setOpenClinicalNote(null);
        this.setState({
            updatedEditorNote: null,
            noteAssistantMode: "context-tray",
            // selectedNote is the note that is selected in the clinical notes view in the NoteAssistant
            selectedNote: null,
            currentlyEditingEntryId: -1
        });
        
        this.props.setNoteClosed(true);
        this.props.setLayout('right-collapsed');
        this.props.setNoteViewerVisible(false);
        this.props.setNoteViewerEditable(false);
    }

    // Create and open a blank note
    openNewNote = () => {
        // Create info to be set for new note
        const signedOn = new moment().format("D MMM YYYY");
        const hospital = "Dana Farber";
        const clinician = this.props.loginUsername;
        const subject = `${clinician}-${new moment().format("YYYYDDMM-hhmm")}`;
        const content = "";
        const signed = false;

        // Add new unsigned note to patient record
        const currentlyEditingEntryId = this.props.patient.addClinicalNote(signedOn, subject, hospital, clinician, null, content, signed);

        const newNote = this.props.patient.getNotes().find(function (curNote) {
            return Lang.isEqual(curNote.entryInfo.entryId, currentlyEditingEntryId);
        });

        this.openNote(newNote, true);

        this.setState({ showTemplateView: true });
    }

    // Open an existing note
    openExistingNote = (isInProgress, note) => {
        this.openNote(note, isInProgress);
        this.setState({ showTemplateView: false });
       
    }

    openNote = (note, isInProgress) => {
     
        // Saves the current note and resets localDocumentText before opening the next note.
        this.saveNote(this.state.localDocumentText);

        // Open a note
        this.props.setNoteClosed(false);
        this.props.setLayout('split');
        this.props.setNoteViewerVisible(true);

        // Old note above these lines: 'the lines below are duplicative'
        this.updateSelectedNote(note);
        this.handleUpdateEditorWithNote(note);

        if (isInProgress) {
            this.props.setNoteViewerEditable(true);
        } else {
            this.props.setNoteViewerEditable(false);
        }
    }

    // Removes a note from patient object if the note is unsigned 
    deleteSelectedNote = () => {
        this.closeNote(this.state.localDocumentText);
        if (this.state.selectedNote && !this.state.selectedNote.signed) {
            // Prepare shortcuts in current note for deletion
            this.props.structuredFieldMapManager.idToShortcutMap.forEach((value, key) => {
                value.onBeforeDeleted();
            });
            // Clear all shortcuts from the current mapManager
            this.props.structuredFieldMapManager.clearStructuredFieldMap();
            this.props.patient.removeClinicalNote(this.state.selectedNote);

        } else {
            console.error('Tried to remove a note that is signed')
        }
    }

    handleSignButtonClick = () => {
        this.saveNote(this.state.localDocumentText);

        // Set signed attribute on the selected note to be true
        const tempNote = this.state.selectedNote;
        tempNote.signed = true;
        tempNote.signedBy = this.props.loginUsername;
        this.setState({selectedNote: tempNote});
        let inProg = this.props.patient.getInProgressNotes();
        inProg.forEach((a) => {
            this.props.patient.removeClinicalNote(a)
        });
        this.props.dataAccess.savePatient(this.props.patient);
        inProg.forEach((b) => {
            this.props.patient.reAddEntryToPatient(b);
        });

        // Close the current note
        this.closeNote();
    }

    setUndoTemplateInsertion = (shouldRevertTemplate) => {
        this.setState({ shouldRevertTemplate });
    }

    changeShortcutType = (shortcutKey, shouldUpdateShortcutType, shortcutType) => {
        this.setState({ shortcutKey, shouldUpdateShortcutType, shortcutType });
    }

    renderSignButton = () => {
        return (
            <div id="finish-sign-component">
                <Button 
                    raised 
                    classes={{
                        root: "btn-finish"
                    }} 
                    onClick={() => {
                        this.handleSignButtonClick();
                    }}
                >
                    Sign note
                </Button>
            </div>
        );
    }

    renderNotesPanelContent() {

        // If isNoteViewerVisible is true, render the flux notes editor and the note assistant
        if (this.props.isNoteViewerVisible) {

            // If note viewer is editable and a note is selected, render the sign note button
            if (this.props.isNoteViewerEditable && this.state.selectedNote) {
                if (this.state.noteAssistantMode === 'poc') {
                    return (
                        <div>
                            <Row center="xs" style={{ height: '75px' }}>
                                <Col sm={7} md={8} lg={9}>
                                    {this.renderFluxNotesEditor()}
                                </Col>
                                <Col sm={5} md={4} lg={3}>
                                    {this.renderNoteAssistant()}
                                </Col>
                            </Row>
                            <Row start="xs" style={{ marginLeft: '2px', marginRight: '10px' }}>
                                <PointOfCare
                                    structuredFieldMapManager={this.props.structuredFieldMapManager}
                                    ref={(poc) => { this.pointOfCare = poc; }} />
                            </Row>
                        </div>

                    );
                } else {
                    return (
                        <div>
                            <Row center="xs">
                                <Col sm={7} md={8} lg={9}>
                                    {this.renderFluxNotesEditor()}
                                    {this.renderSignButton()}
                                </Col>
                                <Col sm={5} md={4} lg={3}>
                                    {this.renderNoteAssistant()}
                                </Col>
                            </Row>
                        </div>
                    );
                }
                // Else don't render sign note button
            } else {
                return (
                    <div>
                        <Row center="xs">
                            <Col sm={7} md={8} lg={9}>
                                {this.renderFluxNotesEditor()}
                            </Col>
                            <Col sm={5} md={4} lg={3}>
                                {this.renderNoteAssistant()}
                            </Col>
                        </Row>
                    </div>
                );
            }

            // Else just render the note assistant
        } else {
            return (
                <Row center="xs">
                    <Col sm={12}>
                        {this.renderNoteAssistant()}
                    </Col>
                </Row>
            );
        }
    }

    renderFluxNotesEditor() {
        return (
            <div className="panel-content dashboard-panel">
                <FluxNotesEditor
                    closeNote={this.closeNote}
                    contextManager={this.props.contextManager}
                    currentViewMode={this.props.currentViewMode}
                    errors={this.props.errors}
                    handleUpdateEditorWithNote={this.handleUpdateEditorWithNote}
                    isNoteViewerEditable={this.props.isNoteViewerEditable}
                    itemInserted={this.props.itemInserted}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    noteAssistantMode={this.state.noteAssistantMode}
                    patient={this.props.patient}
                    saveNote={this.saveNote}
                    selectedNote={this.state.selectedNote}
                    setForceRefresh={this.props.setForceRefresh}
                    setNoteViewerEditable={this.props.setNoteViewerEditable}
                    setLayout={this.props.setLayout}
                    shortcutManager={this.props.shortcutManager}
                    shouldEditorContentUpdate={this.state.noteAssistantMode !== 'pick-list-options-panel'}
                    selectedPickListOptions={this.state.selectedPickListOptions}
                    structuredFieldMapManager={this.props.structuredFieldMapManager}
                    summaryItemToInsert={this.props.summaryItemToInsert}
                    summaryItemToInsertSource={this.props.summaryItemToInsertSource}
                    contextTrayItemToInsert={this.state.contextTrayItemToInsert}
                    updateLocalDocumentText={this.updateLocalDocumentText}
                    // Pass in note that the editor is to be updated with
                    updatedEditorNote={this.state.updatedEditorNote}
                    updateErrors={this.props.updateErrors}
                    updateSelectedNote={this.updateSelectedNote}
                    updateNoteAssistantMode={this.updateNoteAssistantMode}
                    arrayOfPickLists={this.state.arrayOfPickLists}
                    handleUpdateArrayOfPickLists={this.handleUpdateArrayOfPickLists}
                    updateContextTrayItemToInsert={this.updateContextTrayItemToInsert}
                    shouldRevertTemplate={this.state.shouldRevertTemplate}
                    setUndoTemplateInsertion={this.setUndoTemplateInsertion}
                    shouldUpdateShortcutType={this.state.shouldUpdateShortcutType}
                    shortcutKey={this.state.shortcutKey}
                    shortcutType={this.state.shortcutType}
                    changeShortcutType={this.changeShortcutType}
                />
            </div>
        );
    }

    renderNoteAssistant() {
        return (
            <div className="fitted-panel panel-content dashboard-panel note-assistant-panel">
                <NoteAssistant
                    closeNote={this.closeNote}
                    currentlyEditingEntryId={this.state.currentlyEditingEntryId}
                    contextManager={this.props.contextManager}
                    contextTrayItemToInsert={this.state.contextTrayItemToInsert}
                    deleteSelectedNote={this.deleteSelectedNote}
                    errors={this.props.errors}
                    handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                    handleUpdateArrayOfPickLists={this.handleUpdateArrayOfPickLists}
                    handleUpdateEditorWithNote={this.handleUpdateEditorWithNote}
                    isNoteViewerEditable={this.props.isNoteViewerEditable}
                    itemInserted={this.props.itemInserted}
                    loadNote={this.handleUpdateEditorWithNote}
                    loginUsername={this.props.loginUsername}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    noteAssistantMode={this.state.noteAssistantMode}
                    noteClosed={this.props.noteClosed}
                    openNewNote={this.openNewNote}
                    showTemplateView={this.state.showTemplateView}
                    openExistingNote={this.openExistingNote}
                    patient={this.props.patient}
                    saveNote={this.saveNote}
                    searchSelectedItem={this.props.searchSelectedItem}
                    selectedNote={this.state.selectedNote}
                    setLayout={this.props.setLayout} 
                    setNoteClosed={this.props.setNoteClosed}
                    setNoteViewerEditable={this.props.setNoteViewerEditable}
                    setNoteViewerVisible={this.props.setNoteViewerVisible}
                    setOpenClinicalNote={this.props.setOpenClinicalNote}
                    setSearchSelectedItem={this.props.setSearchSelectedItem}
                    shortcutManager={this.props.shortcutManager}
                    shouldEditorContentUpdate={this.state.noteAssistantMode === 'pick-list-options-panel'}
                    structuredFieldMapManager={this.props.structuredFieldMapManager}
                    summaryItemToInsert={this.props.summaryItemToInsert}
                    updateLocalDocumentText={this.updateLocalDocumentText}
                    updateNoteAssistantMode={this.updateNoteAssistantMode}
                    updateSelectedNote={this.updateSelectedNote}
                    arrayOfPickLists={this.state.arrayOfPickLists}
                    updateContextTrayItemToInsert={this.updateContextTrayItemToInsert}
                    updateSelectedPickListOptions={this.updateSelectedPickListOptions}
                    updatedEditorNote={this.state.updatedEditorNote}
                    updateErrors={this.props.updateErrors}
                    updateShowTemplateView={this.updateShowTemplateView}
                    setUndoTemplateInsertion={this.setUndoTemplateInsertion}
                    changeShortcutType={this.changeShortcutType}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderNotesPanelContent()}
            </div>
        );
    }
}

NotesPanel.propTypes = {
    contextManager: PropTypes.object,
    currentViewMode: PropTypes.string.isRequired,
    dataAccess: PropTypes.object.isRequired,
    errors: PropTypes.array.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    isNoteViewerVisible: PropTypes.bool.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    itemInserted: PropTypes.func.isRequired,
    loginUsername: PropTypes.string.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    noteClosed: PropTypes.bool.isRequired,
    openClinicalNote: PropTypes.object,
    patient: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    setNoteClosed: PropTypes.func.isRequired,
    setNoteViewerEditable: PropTypes.func.isRequired,
    setForceRefresh: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    setNoteViewerVisible: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setOpenClinicalNote: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    summaryItemToInsert: PropTypes.string.isRequired,
    updateErrors: PropTypes.func.isRequired,
};