import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.procedure.InputFinding.
 */
class InputFinding {

  /**
   * Get the value (aliases findingStatement).
   * @returns {Reference} The cimi.statement.FindingStatement reference
   */
  get value() {
    return this._findingStatement;
  }

  /**
   * Set the value (aliases findingStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.FindingStatement reference
   */
  set value(value) {
    this._findingStatement = value;
  }

  /**
   * Set the value (aliases findingStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.FindingStatement reference
   * @returns {InputFinding} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.statement.FindingStatement reference.
   * @returns {Reference} The cimi.statement.FindingStatement reference
   */
  get findingStatement() {
    return this._findingStatement;
  }

  /**
   * Set the cimi.statement.FindingStatement reference.
   * This field/value is required.
   * @param {Reference} findingStatement - The cimi.statement.FindingStatement reference
   */
  set findingStatement(findingStatement) {
    this._findingStatement = findingStatement;
  }

  /**
   * Set the cimi.statement.FindingStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} findingStatement - The cimi.statement.FindingStatement reference
   * @returns {InputFinding} this.
   */
  withFindingStatement(findingStatement) {
    this.findingStatement = findingStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the InputFinding class.
   * The JSON must be valid against the InputFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {InputFinding} An instance of InputFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new InputFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the InputFinding class to a JSON object.
   * The JSON is expected to be valid against the InputFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/InputFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the InputFinding class to a FHIR object.
   * The FHIR is expected to be valid against the InputFinding FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default InputFinding;
