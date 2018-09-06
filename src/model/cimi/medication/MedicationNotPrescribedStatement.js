import { setPropertiesFromJSON } from '../../json-helper';

import ActionRequestedAgainstStatement from '../statement/ActionRequestedAgainstStatement';

/**
 * Generated class for cimi.medication.MedicationNotPrescribedStatement.
 * @extends ActionRequestedAgainstStatement
 */
class MedicationNotPrescribedStatement extends ActionRequestedAgainstStatement {

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
   * @returns {MedicationNotPrescribedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the MedicationDispenseTopic.
   * @returns {MedicationDispenseTopic} The cimi.medication.MedicationDispenseTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the MedicationDispenseTopic.
   * This field/value is required.
   * @param {MedicationDispenseTopic} statementTopic - The cimi.medication.MedicationDispenseTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the MedicationDispenseTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationDispenseTopic} statementTopic - The cimi.medication.MedicationDispenseTopic
   * @returns {MedicationNotPrescribedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the RequestedAgainstContext.
   * @returns {RequestedAgainstContext} The cimi.context.RequestedAgainstContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the RequestedAgainstContext.
   * This field/value is required.
   * @param {RequestedAgainstContext} statementContext - The cimi.context.RequestedAgainstContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the RequestedAgainstContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedAgainstContext} statementContext - The cimi.context.RequestedAgainstContext
   * @returns {MedicationNotPrescribedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotPrescribedStatement class.
   * The JSON must be valid against the MedicationNotPrescribedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotPrescribedStatement} An instance of MedicationNotPrescribedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotPrescribedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationNotPrescribedStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotPrescribedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationNotPrescribedStatement' };
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
   * Serializes an instance of the MedicationNotPrescribedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationNotPrescribedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default MedicationNotPrescribedStatement;
