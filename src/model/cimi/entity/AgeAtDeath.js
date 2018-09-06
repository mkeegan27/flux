import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.entity.AgeAtDeath.
 */
class AgeAtDeath {

  /**
   * Get the choice value; one of: shr.core.Age, shr.core.Range.
   * @returns {(Age|Range)} The choice value; one of: shr.core.Age, shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Age, shr.core.Range.
   * This field/value is required.
   * @param {(Age|Range)} value - The choice value; one of: shr.core.Age, shr.core.Range
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Age, shr.core.Range and return 'this' for chaining.
   * This field/value is required.
   * @param {(Age|Range)} value - The choice value; one of: shr.core.Age, shr.core.Range
   * @returns {AgeAtDeath} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AgeAtDeath class.
   * The JSON must be valid against the AgeAtDeath JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AgeAtDeath} An instance of AgeAtDeath populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AgeAtDeath();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AgeAtDeath class to a JSON object.
   * The JSON is expected to be valid against the AgeAtDeath JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/AgeAtDeath' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AgeAtDeath class to a FHIR object.
   * The FHIR is expected to be valid against the AgeAtDeath FHIR profile, but no validation checks are performed.
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
export default AgeAtDeath;
