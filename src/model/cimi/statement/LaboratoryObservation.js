import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for cimi.statement.LaboratoryObservation.
 * @extends Observation
 */
class LaboratoryObservation extends Observation {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {LaboratoryObservation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the LaboratoryObservationTopic.
   * @returns {LaboratoryObservationTopic} The cimi.topic.LaboratoryObservationTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the LaboratoryObservationTopic.
   * This field/value is required.
   * @param {LaboratoryObservationTopic} statementTopic - The cimi.topic.LaboratoryObservationTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the LaboratoryObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {LaboratoryObservationTopic} statementTopic - The cimi.topic.LaboratoryObservationTopic
   * @returns {LaboratoryObservation} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryObservation class.
   * The JSON must be valid against the LaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryObservation} An instance of LaboratoryObservation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/LaboratoryObservation' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the LaboratoryObservation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default LaboratoryObservation;
