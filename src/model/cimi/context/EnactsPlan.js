import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.EnactsPlan.
 */
class EnactsPlan {

  /**
   * Get the value (aliases clinicalStatement).
   * @returns {Reference} The cimi.statement.ClinicalStatement reference
   */
  get value() {
    return this._clinicalStatement;
  }

  /**
   * Set the value (aliases clinicalStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ClinicalStatement reference
   */
  set value(value) {
    this._clinicalStatement = value;
  }

  /**
   * Set the value (aliases clinicalStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ClinicalStatement reference
   * @returns {EnactsPlan} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.statement.ClinicalStatement reference.
   * @returns {Reference} The cimi.statement.ClinicalStatement reference
   */
  get clinicalStatement() {
    return this._clinicalStatement;
  }

  /**
   * Set the cimi.statement.ClinicalStatement reference.
   * This field/value is required.
   * @param {Reference} clinicalStatement - The cimi.statement.ClinicalStatement reference
   */
  set clinicalStatement(clinicalStatement) {
    this._clinicalStatement = clinicalStatement;
  }

  /**
   * Set the cimi.statement.ClinicalStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} clinicalStatement - The cimi.statement.ClinicalStatement reference
   * @returns {EnactsPlan} this.
   */
  withClinicalStatement(clinicalStatement) {
    this.clinicalStatement = clinicalStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EnactsPlan class.
   * The JSON must be valid against the EnactsPlan JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EnactsPlan} An instance of EnactsPlan populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EnactsPlan();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EnactsPlan class to a JSON object.
   * The JSON is expected to be valid against the EnactsPlan JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/EnactsPlan' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default EnactsPlan;
