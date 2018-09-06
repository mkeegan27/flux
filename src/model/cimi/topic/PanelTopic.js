import { setPropertiesFromJSON } from '../../json-helper';

import EvaluationResultTopic from './EvaluationResultTopic';

/**
 * Generated class for cimi.topic.PanelTopic.
 * @extends EvaluationResultTopic
 */
class PanelTopic extends EvaluationResultTopic {

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The cimi.topic.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * This field/value is required.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * This field/value is required.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   * @returns {PanelTopic} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PanelTopic class.
   * The JSON must be valid against the PanelTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PanelTopic} An instance of PanelTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PanelTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PanelTopic class to a JSON object.
   * The JSON is expected to be valid against the PanelTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/PanelTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.evaluationMethod != null) {
      inst['EvaluationMethod'] = typeof this.evaluationMethod.toJSON === 'function' ? this.evaluationMethod.toJSON() : this.evaluationMethod;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.focus != null) {
      inst['Focus'] = typeof this.focus.toJSON === 'function' ? this.focus.toJSON() : this.focus;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.evaluationComponent != null) {
      inst['EvaluationComponent'] = this.evaluationComponent.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    return inst;
  }
}
export default PanelTopic;
