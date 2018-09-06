import { setPropertiesFromJSON } from '../../json-helper';

import ActionRequestedStatement from '../statement/ActionRequestedStatement';

/**
 * Generated class for cimi.medication.MedicationDispenseRequestedStatement.
 * @extends ActionRequestedStatement
 */
class MedicationDispenseRequestedStatement extends ActionRequestedStatement {

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
   * @returns {MedicationDispenseRequestedStatement} this.
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
   * @returns {MedicationDispenseRequestedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the RequestedContext.
   * @returns {RequestedContext} The cimi.context.RequestedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the RequestedContext.
   * This field/value is required.
   * @param {RequestedContext} statementContext - The cimi.context.RequestedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the RequestedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedContext} statementContext - The cimi.context.RequestedContext
   * @returns {MedicationDispenseRequestedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationDispenseRequestedStatement class.
   * The JSON must be valid against the MedicationDispenseRequestedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispenseRequestedStatement} An instance of MedicationDispenseRequestedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispenseRequestedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationDispenseRequestedStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationDispenseRequestedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationDispenseRequestedStatement' };
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
   * Serializes an instance of the MedicationDispenseRequestedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationDispenseRequestedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'MedicationRequest';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default MedicationDispenseRequestedStatement;
