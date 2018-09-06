import { setPropertiesFromJSON } from '../../json-helper';

import ActionPerformedStatement from '../statement/ActionPerformedStatement';

/**
 * Generated class for cimi.medication.MedicationChangeStatement.
 * @extends ActionPerformedStatement
 */
class MedicationChangeStatement extends ActionPerformedStatement {

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
   * @returns {MedicationChangeStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the MedicationChangeTopic.
   * @returns {MedicationChangeTopic} The cimi.medication.MedicationChangeTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the MedicationChangeTopic.
   * This field/value is required.
   * @param {MedicationChangeTopic} statementTopic - The cimi.medication.MedicationChangeTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the MedicationChangeTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationChangeTopic} statementTopic - The cimi.medication.MedicationChangeTopic
   * @returns {MedicationChangeStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the PerformedContext.
   * @returns {PerformedContext} The cimi.context.PerformedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the PerformedContext.
   * This field/value is required.
   * @param {PerformedContext} statementContext - The cimi.context.PerformedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the PerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PerformedContext} statementContext - The cimi.context.PerformedContext
   * @returns {MedicationChangeStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChangeStatement class.
   * The JSON must be valid against the MedicationChangeStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChangeStatement} An instance of MedicationChangeStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationChangeStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationChangeStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationChangeStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationChangeStatement' };
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
   * Serializes an instance of the MedicationChangeStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationChangeStatement FHIR profile, but no validation checks are performed.
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
export default MedicationChangeStatement;
