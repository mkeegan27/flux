import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.FindingStatus.
 */
class FindingStatus {

  /**
   * Get the value (aliases code).
   * @returns {code} The code
   */
  get value() {
    return this._code;
  }

  /**
   * Set the value (aliases code).
   * This field/value is required.
   * @param {code} value - The code
   */
  set value(value) {
    this._code = value;
  }

  /**
   * Set the value (aliases code) and return 'this' for chaining.
   * This field/value is required.
   * @param {code} value - The code
   * @returns {FindingStatus} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the code.
   * @returns {code} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * This field/value is required.
   * @param {code} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the code and return 'this' for chaining.
   * This field/value is required.
   * @param {code} code - The code
   * @returns {FindingStatus} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FindingStatus class.
   * The JSON must be valid against the FindingStatus JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingStatus} An instance of FindingStatus populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FindingStatus();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingStatus class to a JSON object.
   * The JSON is expected to be valid against the FindingStatus JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/FindingStatus' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the FindingStatus class to a FHIR object.
   * The FHIR is expected to be valid against the FindingStatus FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-FindingStatus-extension';
      inst['valueCode'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default FindingStatus;
