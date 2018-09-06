import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformedStatement from './ProcedurePerformedStatement';

/**
 * Generated class for cimi.procedure.SurgicalProcedurePerformedStatement.
 * @extends ProcedurePerformedStatement
 */
class SurgicalProcedurePerformedStatement extends ProcedurePerformedStatement {

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
   * @returns {SurgicalProcedurePerformedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the SurgicalProcedureTopic.
   * @returns {SurgicalProcedureTopic} The cimi.procedure.SurgicalProcedureTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the SurgicalProcedureTopic.
   * This field/value is required.
   * @param {SurgicalProcedureTopic} statementTopic - The cimi.procedure.SurgicalProcedureTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the SurgicalProcedureTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {SurgicalProcedureTopic} statementTopic - The cimi.procedure.SurgicalProcedureTopic
   * @returns {SurgicalProcedurePerformedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedurePerformedStatement class.
   * The JSON must be valid against the SurgicalProcedurePerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedurePerformedStatement} An instance of SurgicalProcedurePerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedurePerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedurePerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the SurgicalProcedurePerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/SurgicalProcedurePerformedStatement' };
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
   * Serializes an instance of the SurgicalProcedurePerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the SurgicalProcedurePerformedStatement FHIR profile, but no validation checks are performed.
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
export default SurgicalProcedurePerformedStatement;
