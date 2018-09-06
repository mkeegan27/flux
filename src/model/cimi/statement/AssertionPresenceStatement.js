import { setPropertiesFromJSON } from '../../json-helper';

import AssertionStatement from './AssertionStatement';

/**
 * Generated class for cimi.statement.AssertionPresenceStatement.
 * @extends AssertionStatement
 */
class AssertionPresenceStatement extends AssertionStatement {

  /**
   * Get the PresenceContext.
   * @returns {PresenceContext} The cimi.context.PresenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the PresenceContext.
   * This field/value is required.
   * @param {PresenceContext} statementContext - The cimi.context.PresenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the PresenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PresenceContext} statementContext - The cimi.context.PresenceContext
   * @returns {AssertionPresenceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AssertionPresenceStatement class.
   * The JSON must be valid against the AssertionPresenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssertionPresenceStatement} An instance of AssertionPresenceStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssertionPresenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AssertionPresenceStatement class to a JSON object.
   * The JSON is expected to be valid against the AssertionPresenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/AssertionPresenceStatement' } };
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
   * Serializes an instance of the AssertionPresenceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the AssertionPresenceStatement FHIR profile, but no validation checks are performed.
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
export default AssertionPresenceStatement;
