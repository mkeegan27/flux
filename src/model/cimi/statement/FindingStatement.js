import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from './ClinicalStatement';

/**
 * Generated class for cimi.statement.FindingStatement.
 * @extends ClinicalStatement
 */
class FindingStatement extends ClinicalStatement {

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
   * @returns {FindingStatement} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
  }

  /**
   * Get the FindingTopic.
   * @returns {FindingTopic} The cimi.topic.FindingTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the FindingTopic.
   * This field/value is required.
   * @param {FindingTopic} statementTopic - The cimi.topic.FindingTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the FindingTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopic} statementTopic - The cimi.topic.FindingTopic
   * @returns {FindingStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FindingStatement class.
   * The JSON must be valid against the FindingStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingStatement} An instance of FindingStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FindingStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingStatement class to a JSON object.
   * The JSON is expected to be valid against the FindingStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/FindingStatement' } };
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
   * Serializes an instance of the FindingStatement class to a FHIR object.
   * The FHIR is expected to be valid against the FindingStatement FHIR profile, but no validation checks are performed.
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
    return inst;
  }
}
export default FindingStatement;
