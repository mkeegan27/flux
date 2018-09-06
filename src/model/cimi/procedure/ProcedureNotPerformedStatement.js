import { setPropertiesFromJSON } from '../../json-helper';

import ActionNotPerformedStatement from '../statement/ActionNotPerformedStatement';

/**
 * Generated class for cimi.procedure.ProcedureNotPerformedStatement.
 * @extends ActionNotPerformedStatement
 */
class ProcedureNotPerformedStatement extends ActionNotPerformedStatement {

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
   * @returns {ProcedureNotPerformedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the cimi.core.PersonOfRecord reference.
   * @returns {Reference} The cimi.core.PersonOfRecord reference
   */
  get personOfRecord() {
    return this._personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference.
   * This field/value is required.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   */
  set personOfRecord(personOfRecord) {
    this._personOfRecord = personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   * @returns {ProcedureNotPerformedStatement} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
  }

  /**
   * Get the ProcedureTopic.
   * @returns {ProcedureTopic} The cimi.procedure.ProcedureTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ProcedureTopic.
   * This field/value is required.
   * @param {ProcedureTopic} statementTopic - The cimi.procedure.ProcedureTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ProcedureTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ProcedureTopic} statementTopic - The cimi.procedure.ProcedureTopic
   * @returns {ProcedureNotPerformedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the ProcedureNotPerformedContext.
   * @returns {ProcedureNotPerformedContext} The cimi.procedure.ProcedureNotPerformedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the ProcedureNotPerformedContext.
   * This field/value is required.
   * @param {ProcedureNotPerformedContext} statementContext - The cimi.procedure.ProcedureNotPerformedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the ProcedureNotPerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ProcedureNotPerformedContext} statementContext - The cimi.procedure.ProcedureNotPerformedContext
   * @returns {ProcedureNotPerformedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureNotPerformedStatement class.
   * The JSON must be valid against the ProcedureNotPerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureNotPerformedStatement} An instance of ProcedureNotPerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureNotPerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureNotPerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the ProcedureNotPerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/ProcedureNotPerformedStatement' };
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
   * Serializes an instance of the ProcedureNotPerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedureNotPerformedStatement FHIR profile, but no validation checks are performed.
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
export default ProcedureNotPerformedStatement;
