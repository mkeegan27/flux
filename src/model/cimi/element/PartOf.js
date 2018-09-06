import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.element.PartOf.
 */
class PartOf {

  /**
   * Get the value (aliases independent).
   * @returns {Reference} The cimi.core.Independent reference
   */
  get value() {
    return this._independent;
  }

  /**
   * Set the value (aliases independent).
   * This field/value is required.
   * @param {Reference} value - The cimi.core.Independent reference
   */
  set value(value) {
    this._independent = value;
  }

  /**
   * Set the value (aliases independent) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.core.Independent reference
   * @returns {PartOf} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.core.Independent reference.
   * @returns {Reference} The cimi.core.Independent reference
   */
  get independent() {
    return this._independent;
  }

  /**
   * Set the cimi.core.Independent reference.
   * This field/value is required.
   * @param {Reference} independent - The cimi.core.Independent reference
   */
  set independent(independent) {
    this._independent = independent;
  }

  /**
   * Set the cimi.core.Independent reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} independent - The cimi.core.Independent reference
   * @returns {PartOf} this.
   */
  withIndependent(independent) {
    this.independent = independent; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PartOf class.
   * The JSON must be valid against the PartOf JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PartOf} An instance of PartOf populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PartOf();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PartOf class to a JSON object.
   * The JSON is expected to be valid against the PartOf JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/element/PartOf' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PartOf class to a FHIR object.
   * The FHIR is expected to be valid against the PartOf FHIR profile, but no validation checks are performed.
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
export default PartOf;
