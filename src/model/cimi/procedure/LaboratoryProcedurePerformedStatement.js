import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformedStatement from './ProcedurePerformedStatement';

/**
 * Generated class for cimi.procedure.LaboratoryProcedurePerformedStatement.
 * @extends ProcedurePerformedStatement
 */
class LaboratoryProcedurePerformedStatement extends ProcedurePerformedStatement {

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
   * @returns {LaboratoryProcedurePerformedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the LaboratoryProcedureTopic.
   * @returns {LaboratoryProcedureTopic} The cimi.procedure.LaboratoryProcedureTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the LaboratoryProcedureTopic.
   * This field/value is required.
   * @param {LaboratoryProcedureTopic} statementTopic - The cimi.procedure.LaboratoryProcedureTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the LaboratoryProcedureTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {LaboratoryProcedureTopic} statementTopic - The cimi.procedure.LaboratoryProcedureTopic
   * @returns {LaboratoryProcedurePerformedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryProcedurePerformedStatement class.
   * The JSON must be valid against the LaboratoryProcedurePerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryProcedurePerformedStatement} An instance of LaboratoryProcedurePerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryProcedurePerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryProcedurePerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryProcedurePerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/LaboratoryProcedurePerformedStatement' };
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
   * Serializes an instance of the LaboratoryProcedurePerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the LaboratoryProcedurePerformedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Procedure';
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default LaboratoryProcedurePerformedStatement;
