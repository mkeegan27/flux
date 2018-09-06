import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryObservation from './LaboratoryObservation';

/**
 * Generated class for cimi.statement.CodedLaboratoryObservation.
 * @extends LaboratoryObservation
 */
class CodedLaboratoryObservation extends LaboratoryObservation {

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
   * @returns {CodedLaboratoryObservation} this.
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
   * @returns {CodedLaboratoryObservation} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the ObservationContext.
   * @returns {ObservationContext} The cimi.context.ObservationContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the ObservationContext.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the ObservationContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   * @returns {CodedLaboratoryObservation} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodedLaboratoryObservation class.
   * The JSON must be valid against the CodedLaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodedLaboratoryObservation} An instance of CodedLaboratoryObservation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CodedLaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CodedLaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the CodedLaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/CodedLaboratoryObservation' };
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
   * Serializes an instance of the CodedLaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the CodedLaboratoryObservation FHIR profile, but no validation checks are performed.
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
export default CodedLaboratoryObservation;
