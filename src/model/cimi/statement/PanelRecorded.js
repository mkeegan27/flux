import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryTestResultRecorded from './LaboratoryTestResultRecorded';

/**
 * Generated class for cimi.statement.PanelRecorded.
 * @extends LaboratoryTestResultRecorded
 */
class PanelRecorded extends LaboratoryTestResultRecorded {

  /**
   * Get the PanelTopic.
   * @returns {PanelTopic} The cimi.topic.PanelTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the PanelTopic.
   * This field/value is required.
   * @param {PanelTopic} statementTopic - The cimi.topic.PanelTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the PanelTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {PanelTopic} statementTopic - The cimi.topic.PanelTopic
   * @returns {PanelRecorded} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PanelRecorded class.
   * The JSON must be valid against the PanelRecorded JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PanelRecorded} An instance of PanelRecorded populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PanelRecorded();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PanelRecorded class to a JSON object.
   * The JSON is expected to be valid against the PanelRecorded JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/PanelRecorded' } };
    if (this.subjectOfInformation != null) {
      inst['SubjectOfInformation'] = typeof this.subjectOfInformation.toJSON === 'function' ? this.subjectOfInformation.toJSON() : this.subjectOfInformation;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.recordStatus != null) {
      inst['RecordStatus'] = typeof this.recordStatus.toJSON === 'function' ? this.recordStatus.toJSON() : this.recordStatus;
    }
    if (this.recorded != null) {
      inst['Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.cosigned != null) {
      inst['Cosigned'] = this.cosigned.map(f => f.toJSON());
    }
    if (this.verified != null) {
      inst['Verified'] = this.verified.map(f => f.toJSON());
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    if (this.diagnosticService != null) {
      inst['DiagnosticService'] = this.diagnosticService.map(f => f.toJSON());
    }
    return inst;
  }
}
export default PanelRecorded;
