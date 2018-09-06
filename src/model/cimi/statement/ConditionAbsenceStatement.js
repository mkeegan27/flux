import { setPropertiesFromJSON } from '../../json-helper';

import AssertionAbsenceStatement from './AssertionAbsenceStatement';

/**
 * Generated class for cimi.statement.ConditionAbsenceStatement.
 * @extends AssertionAbsenceStatement
 */
class ConditionAbsenceStatement extends AssertionAbsenceStatement {

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
   * @returns {ConditionAbsenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ConditionAssertionTopic.
   * @returns {ConditionAssertionTopic} The cimi.topic.ConditionAssertionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ConditionAssertionTopic.
   * This field/value is required.
   * @param {ConditionAssertionTopic} statementTopic - The cimi.topic.ConditionAssertionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ConditionAssertionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ConditionAssertionTopic} statementTopic - The cimi.topic.ConditionAssertionTopic
   * @returns {ConditionAbsenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionAbsenceStatement class.
   * The JSON must be valid against the ConditionAbsenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionAbsenceStatement} An instance of ConditionAbsenceStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConditionAbsenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ConditionAbsenceStatement class to a JSON object.
   * The JSON is expected to be valid against the ConditionAbsenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ConditionAbsenceStatement' };
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
   * Serializes an instance of the ConditionAbsenceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ConditionAbsenceStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default ConditionAbsenceStatement;
