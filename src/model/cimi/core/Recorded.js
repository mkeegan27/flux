import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.Recorded.
 */
class Recorded {

  /**
   * Get the value (aliases attribution).
   * @returns {Attribution} The cimi.core.Attribution
   */
  get value() {
    return this._attribution;
  }

  /**
   * Set the value (aliases attribution).
   * This field/value is required.
   * @param {Attribution} value - The cimi.core.Attribution
   */
  set value(value) {
    this._attribution = value;
  }

  /**
   * Set the value (aliases attribution) and return 'this' for chaining.
   * This field/value is required.
   * @param {Attribution} value - The cimi.core.Attribution
   * @returns {Recorded} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Attribution.
   * @returns {Attribution} The cimi.core.Attribution
   */
  get attribution() {
    return this._attribution;
  }

  /**
   * Set the Attribution.
   * This field/value is required.
   * @param {Attribution} attribution - The cimi.core.Attribution
   */
  set attribution(attribution) {
    this._attribution = attribution;
  }

  /**
   * Set the Attribution and return 'this' for chaining.
   * This field/value is required.
   * @param {Attribution} attribution - The cimi.core.Attribution
   * @returns {Recorded} this.
   */
  withAttribution(attribution) {
    this.attribution = attribution; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Recorded class.
   * The JSON must be valid against the Recorded JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Recorded} An instance of Recorded populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Recorded();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Recorded class to a JSON object.
   * The JSON is expected to be valid against the Recorded JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/Recorded' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Recorded class to a FHIR object.
   * The FHIR is expected to be valid against the Recorded FHIR profile, but no validation checks are performed.
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
export default Recorded;
