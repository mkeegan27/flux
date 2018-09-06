import { setPropertiesFromJSON } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for cimi.statement.ActionNotPerformedStatement.
 * @extends ActionStatement
 */
class ActionNotPerformedStatement extends ActionStatement {

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
   * @returns {ActionNotPerformedStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionNotPerformedStatement class.
   * The JSON must be valid against the ActionNotPerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionNotPerformedStatement} An instance of ActionNotPerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionNotPerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionNotPerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the ActionNotPerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ActionNotPerformedStatement' } };
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
   * Serializes an instance of the ActionNotPerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ActionNotPerformedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default ActionNotPerformedStatement;
