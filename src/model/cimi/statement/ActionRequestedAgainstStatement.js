import { setPropertiesFromJSON } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for cimi.statement.ActionRequestedAgainstStatement.
 * @extends ActionStatement
 */
class ActionRequestedAgainstStatement extends ActionStatement {

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
   * @returns {ActionRequestedAgainstStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionRequestedAgainstStatement class.
   * The JSON must be valid against the ActionRequestedAgainstStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionRequestedAgainstStatement} An instance of ActionRequestedAgainstStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionRequestedAgainstStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionRequestedAgainstStatement class to a JSON object.
   * The JSON is expected to be valid against the ActionRequestedAgainstStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ActionRequestedAgainstStatement' } };
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
   * Serializes an instance of the ActionRequestedAgainstStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ActionRequestedAgainstStatement FHIR profile, but no validation checks are performed.
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
export default ActionRequestedAgainstStatement;
