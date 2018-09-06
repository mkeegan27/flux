import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from './ClinicalStatement';

/**
 * Generated class for cimi.statement.ActionStatement.
 * @extends ClinicalStatement
 */
class ActionStatement extends ClinicalStatement {

  /**
   * Get the ActionTopic.
   * @returns {ActionTopic} The cimi.topic.ActionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ActionTopic.
   * This field/value is required.
   * @param {ActionTopic} statementTopic - The cimi.topic.ActionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ActionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ActionTopic} statementTopic - The cimi.topic.ActionTopic
   * @returns {ActionStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionStatement class.
   * The JSON must be valid against the ActionStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionStatement} An instance of ActionStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionStatement class to a JSON object.
   * The JSON is expected to be valid against the ActionStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ActionStatement' } };
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
   * Serializes an instance of the ActionStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ActionStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    if (this.statementContext != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.statementContext.toFHIR(true));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-statement-ActionStatement-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default ActionStatement;
