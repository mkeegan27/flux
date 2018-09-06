import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.topic.Focus.
 */
class Focus {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference.
   * @returns {(CodeableConcept|Identifier|Reference)} The choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference.
   * This field/value is required.
   * @param {(CodeableConcept|Identifier|Reference)} value - The choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Identifier|Reference)} value - The choice value; one of: shr.core.CodeableConcept, cimi.element.Identifier, cimi.entity.EntityOrRole reference
   * @returns {Focus} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Focus class.
   * The JSON must be valid against the Focus JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Focus} An instance of Focus populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Focus();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Focus class to a JSON object.
   * The JSON is expected to be valid against the Focus JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/Focus' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Focus;
