import { setPropertiesFromJSON } from '../../json-helper';

import ActionNotPerformedStatement from '../statement/ActionNotPerformedStatement';

/**
 * Generated class for cimi.medication.MedicationNotUsedStatement.
 * @extends ActionNotPerformedStatement
 */
class MedicationNotUsedStatement extends ActionNotPerformedStatement {

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
   * @returns {MedicationNotUsedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the MedicationUseTopic.
   * @returns {MedicationUseTopic} The cimi.medication.MedicationUseTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the MedicationUseTopic.
   * This field/value is required.
   * @param {MedicationUseTopic} statementTopic - The cimi.medication.MedicationUseTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the MedicationUseTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationUseTopic} statementTopic - The cimi.medication.MedicationUseTopic
   * @returns {MedicationNotUsedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the NotPerformedContext.
   * @returns {NotPerformedContext} The cimi.context.NotPerformedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the NotPerformedContext.
   * This field/value is required.
   * @param {NotPerformedContext} statementContext - The cimi.context.NotPerformedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the NotPerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {NotPerformedContext} statementContext - The cimi.context.NotPerformedContext
   * @returns {MedicationNotUsedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotUsedStatement class.
   * The JSON must be valid against the MedicationNotUsedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotUsedStatement} An instance of MedicationNotUsedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotUsedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationNotUsedStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotUsedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationNotUsedStatement' };
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
   * Serializes an instance of the MedicationNotUsedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationNotUsedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'MedicationStatement';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default MedicationNotUsedStatement;
