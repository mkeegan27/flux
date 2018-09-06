import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.Issued.
 */
class Issued {

  /**
   * Get the value (aliases instant).
   * @returns {instant} The instant
   */
  get value() {
    return this._instant;
  }

  /**
   * Set the value (aliases instant).
   * This field/value is required.
   * @param {instant} value - The instant
   */
  set value(value) {
    this._instant = value;
  }

  /**
   * Set the value (aliases instant) and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} value - The instant
   * @returns {Issued} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the instant.
   * @returns {instant} The instant
   */
  get instant() {
    return this._instant;
  }

  /**
   * Set the instant.
   * This field/value is required.
   * @param {instant} instant - The instant
   */
  set instant(instant) {
    this._instant = instant;
  }

  /**
   * Set the instant and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} instant - The instant
   * @returns {Issued} this.
   */
  withInstant(instant) {
    this.instant = instant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Issued class.
   * The JSON must be valid against the Issued JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Issued} An instance of Issued populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Issued();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Issued class to a JSON object.
   * The JSON is expected to be valid against the Issued JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/Issued' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Issued class to a FHIR object.
   * The FHIR is expected to be valid against the Issued FHIR profile, but no validation checks are performed.
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
export default Issued;
