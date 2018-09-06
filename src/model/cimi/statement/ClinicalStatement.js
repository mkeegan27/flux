import { setPropertiesFromJSON } from '../../json-helper';

import InformationEntry from '../core/InformationEntry';

/**
 * Generated class for cimi.statement.ClinicalStatement.
 * @extends InformationEntry
 */
class ClinicalStatement extends InformationEntry {

  /**
   * Get the StatementTopic.
   * @returns {StatementTopic} The cimi.topic.StatementTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the StatementTopic.
   * This field/value is required.
   * @param {StatementTopic} statementTopic - The cimi.topic.StatementTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the StatementTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {StatementTopic} statementTopic - The cimi.topic.StatementTopic
   * @returns {ClinicalStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the StatementContext.
   * @returns {StatementContext} The cimi.context.StatementContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the StatementContext.
   * This field/value is required.
   * @param {StatementContext} statementContext - The cimi.context.StatementContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the StatementContext and return 'this' for chaining.
   * This field/value is required.
   * @param {StatementContext} statementContext - The cimi.context.StatementContext
   * @returns {ClinicalStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicalStatement class.
   * The JSON must be valid against the ClinicalStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicalStatement} An instance of ClinicalStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ClinicalStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ClinicalStatement class to a JSON object.
   * The JSON is expected to be valid against the ClinicalStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ClinicalStatement' } };
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
   * Serializes an instance of the ClinicalStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ClinicalStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    if (this.statementTopic != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.statementTopic.toFHIR(true));
    }
    if (this.statementContext != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.statementContext.toFHIR(true));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-statement-ClinicalStatement-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default ClinicalStatement;
