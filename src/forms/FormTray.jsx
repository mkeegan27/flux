// React imports
import React, {Component} from 'react';
// Our components
import TemplateForm from './TemplateForm';
import DataCaptureForm from './DataCaptureForm';
// material-ui
import Paper from 'material-ui/Paper';
// Lodash component
import Lang from 'lodash'
// Styling
import './FormTray.css';

class FormTray extends Component {
    /*
     need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
     to the correct entry form for the structured field. on exit, set to null.
     */

    constructor(props) {
        super(props);
        
        this._newShortcut = this._newShortcut.bind(this);
        this._insertTemplate = this._insertTemplate.bind(this);
    }

    _insertTemplate(i) {
        console.log(`Inserting template ${i}`);
    }
    _newShortcut(i) {
        console.log(`new shortcut ${i}`);
        this.props.changeCurrentShortcut(this.props.shortcuts[i]);
    }
    render() {
        let panelContent = null;
        if (Lang.isUndefined(this.props.patient)) {
            if (!Lang.isNull(this.props.currentShortcut)) {
                panelContent = this.props.currentShortcut.getForm();
            } else {
                panelContent = (
                    <TemplateForm
                        patient={this.props.patient}
                        heading="Shortcuts"
                        templates={this.props.shortcuts}
                        handleClick={this._newShortcut}
                    />
                );
            }
        } else {
            if (Lang.isNull(this.props.withinStructuredField)) {
                // console.log("FormTray. selectedText = " + this.props.selectedText);

                // When highlighting text in the notes section, change the panel content to display the data capture form
                if (this.props.selectedText != null) {
                    console.log(this.props);
                    panelContent = (
                        <DataCaptureForm
                            // Staging Form data
                            // Update functions
                            onStagingTUpdate={this.props.onStagingTUpdate}
                            onStagingNUpdate={this.props.onStagingNUpdate}
                            onStagingMUpdate={this.props.onStagingMUpdate}
                            onStageUpdate={this.props.onStageUpdate}
                            // Helper functions
                            calculateStage={this.props.calculateStage}
                            // Properties
                            tumorSize={this.props.tumorSize}
                            nodeSize={this.props.nodeSize}
                            metastasis={this.props.metastasis}
                            stage={this.props.stage}
                            
                            // Progression data
                            // Update functions
                            changeCurrentShortcut={this.changeCurrentShortcut}
                            // Properties
                            currentShortcut={this.props.currentShortcut}
                        />
                    );

                } else {
                    panelContent = (
                        <TemplateForm
                            patient={this.props.patient}
                            heading="Available Templates"
                            templates={['op note', 'follow-up', 'consult note']}
                            handleClick={this._insertTemplate}
                        />
                    );
                }
            } else if (this.props.withinStructuredField === "staging") {
                if (!Lang.isNull(this.props.currentShortcut)) { 
                    if (this.props.currentShortcut.getShortcutType() === "staging") { 
                        panelContent = this.props.currentShortcut.getForm();
                    } else { 
                        console.error("In FormTray, supposed to be within Staging structured field but the currentShortcut is not type staging, is instead");
                        console.error(this.props.currentShortcut);
                    }
                } else { 
                    console.error("In FormTray, supposed to be within Staging structured field but there is no currentShortcut");
                }
            } else if (this.props.withinStructuredField === "progression") { 
                if (!Lang.isNull(this.props.currentShortcut)) { 
                    if (this.props.currentShortcut.getShortcutType() === "progression") { 
                        panelContent = this.props.currentShortcut.getForm();
                    } else { 
                        console.error("In FormTray, supposed to be within Progression structured field but the currentShortcut is not type staging, is instead");
                        console.error(this.props.currentShortcut);
                    }
                } else { 
                    console.error("In FormTray, supposed to be within Progression structured field but there is no currentShortcut");
                }
            }
        }
        return (
            <div id="forms-panel" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {panelContent}
                </Paper>
            </div>
        )
    }
}

export default FormTray;
