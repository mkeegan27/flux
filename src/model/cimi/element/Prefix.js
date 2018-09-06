import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.element.Prefix.
 */
class Prefix {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {Prefix} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {Prefix} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Prefix class.
   * The JSON must be valid against the Prefix JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Prefix} An instance of Prefix populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Prefix();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Prefix class to a JSON object.
   * The JSON is expected to be valid against the Prefix JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/element/Prefix' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Prefix class to a FHIR object.
   * The FHIR is expected to be valid against the Prefix FHIR profile, but no validation checks are performed.
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
export default Prefix;
