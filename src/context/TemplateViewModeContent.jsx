import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TemplateForm from '../forms/TemplateForm';

export default class TemplateViewModeContent extends Component {

    // These don't need to be stored as state since they're not being updated
    templates = [
        { name: 'progress note', content: 'REASON FOR VISIT:\n@reason for next visit @condition\n\nONCOLOGY HISTORY:\n@ONCOHIST\n\nREVIEW OF SYSTEMS:\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\nASSESSMENT:\n\nPLAN:\n\n' },
        { name: 'follow-up', content: 'REASON FOR VISIT:\n@patient following up for her @condition.\n\nONCOLOGY HISTORY:\n@ONCOHIST\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n' },
        { name: 'initial consult', content: 'REASON FOR VISIT:\n@patient presenting with @condition for initial consult.\n\nHISTORY OF PRESENT ILLNESS:\n\n\nREVIEW OF SYSTEMS:\n@ROS\n\nALLERGIES:\n@ALLERGIES\n\nMEDICATIONS:\n@active medications\n\nPHYSICAL EXAM:\n\n\nASSESSMENT:\n\n\nPLAN:\n\n' },
        { name: 'op note', content: 'op note' },
        { name: 'test', content: 'FOLLOW UP:\nPatient is showing signs of @condition @ONCOHIST @condition @ONCOHIST\n\nMEDICATIONS:\n@medication\n\nProcedures:\n@procedure' },
        { name: 'consult note', content: '@patient presenting with ' }
    ];

    // Insert the content of the template as you would a shortcut
    insertTemplate = (i) => {
        this.props.setInsertingTemplate(true);
        this.props.onShortcutClicked(this.templates[i].content);
    }

    // Just render the form for the templates; if additional information was to rendered, we would do it here.
    render() {
        return (
            <TemplateForm
                handleClick={this.insertTemplate}
                heading=""
                patient={this.props.patient}
                templates={this.templates.map((item) => { return item.name })}
            />
        );
    }
}

TemplateViewModeContent.proptypes = {
    onShortcutClicked: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    setInsertingTemplate: PropTypes.func.isRequired,
}
