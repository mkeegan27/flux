import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformedStatement from './ProcedurePerformedStatement';

/**
 * Generated class for cimi.procedure.ImagingProcedurePerformedStatement.
 * @extends ProcedurePerformedStatement
 */
class ImagingProcedurePerformedStatement extends ProcedurePerformedStatement {

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
   * @returns {ImagingProcedurePerformedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ImagingProcedureTopic.
   * @returns {ImagingProcedureTopic} The cimi.procedure.ImagingProcedureTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ImagingProcedureTopic.
   * This field/value is required.
   * @param {ImagingProcedureTopic} statementTopic - The cimi.procedure.ImagingProcedureTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ImagingProcedureTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ImagingProcedureTopic} statementTopic - The cimi.procedure.ImagingProcedureTopic
   * @returns {ImagingProcedurePerformedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImagingProcedurePerformedStatement class.
   * The JSON must be valid against the ImagingProcedurePerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingProcedurePerformedStatement} An instance of ImagingProcedurePerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingProcedurePerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ImagingProcedurePerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the ImagingProcedurePerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/ImagingProcedurePerformedStatement' };
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
   * Serializes an instance of the ImagingProcedurePerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ImagingProcedurePerformedStatement FHIR profile, but no validation checks are performed.
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
export default ImagingProcedurePerformedStatement;
