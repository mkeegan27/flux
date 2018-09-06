import { setPropertiesFromJSON } from '../../json-helper';

import FindingStatement from './FindingStatement';

/**
 * Generated class for cimi.statement.AssertionStatement.
 * @extends FindingStatement
 */
class AssertionStatement extends FindingStatement {

  /**
   * Deserializes JSON data to an instance of the AssertionStatement class.
   * The JSON must be valid against the AssertionStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssertionStatement} An instance of AssertionStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssertionStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AssertionStatement class to a JSON object.
   * The JSON is expected to be valid against the AssertionStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/AssertionStatement' } };
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
   * Serializes an instance of the AssertionStatement class to a FHIR object.
   * The FHIR is expected to be valid against the AssertionStatement FHIR profile, but no validation checks are performed.
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
export default AssertionStatement;
