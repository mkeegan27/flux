import { setPropertiesFromJSON } from '../../json-helper';

import ActionPerformedStatement from '../statement/ActionPerformedStatement';

/**
 * Generated class for cimi.medication.MedicationUsedStatement.
 * @extends ActionPerformedStatement
 */
class MedicationUsedStatement extends ActionPerformedStatement {

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
   * @returns {MedicationUsedStatement} this.
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
   * @returns {MedicationUsedStatement} this.
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
   * @returns {MedicationUsedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationUsedStatement class.
   * The JSON must be valid against the MedicationUsedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationUsedStatement} An instance of MedicationUsedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationUsedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationUsedStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationUsedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationUsedStatement' };
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
   * Serializes an instance of the MedicationUsedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationUsedStatement FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-medication-MedicationUsedStatement-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default MedicationUsedStatement;
