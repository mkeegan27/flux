import { setPropertiesFromJSON } from '../../json-helper';

import CodedNonLaboratoryObservation from './CodedNonLaboratoryObservation';

/**
 * Generated class for cimi.statement.SimpleCodedNonLaboratoryObservation.
 * @extends CodedNonLaboratoryObservation
 */
class SimpleCodedNonLaboratoryObservation extends CodedNonLaboratoryObservation {

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
   * @returns {SimpleCodedNonLaboratoryObservation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ObservationTopic.
   * @returns {ObservationTopic} The cimi.topic.ObservationTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ObservationTopic.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   * @returns {SimpleCodedNonLaboratoryObservation} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleCodedNonLaboratoryObservation class.
   * The JSON must be valid against the SimpleCodedNonLaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleCodedNonLaboratoryObservation} An instance of SimpleCodedNonLaboratoryObservation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SimpleCodedNonLaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SimpleCodedNonLaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the SimpleCodedNonLaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/SimpleCodedNonLaboratoryObservation' };
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
   * Serializes an instance of the SimpleCodedNonLaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleCodedNonLaboratoryObservation FHIR profile, but no validation checks are performed.
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
export default SimpleCodedNonLaboratoryObservation;
