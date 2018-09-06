import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.Informant.
 */
class Informant {

  /**
   * Get the choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference.
   * @returns {(string|Reference)} The choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference.
   * This field/value is required.
   * @param {(string|Reference)} value - The choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(string|Reference)} value - The choice value; one of: string, cimi.entity.Patient reference, cimi.entity.Group reference, cimi.entity.Device reference, cimi.entity.RelatedPerson reference, cimi.entity.Organization reference
   * @returns {Informant} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Informant class.
   * The JSON must be valid against the Informant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Informant} An instance of Informant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Informant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Informant class to a JSON object.
   * The JSON is expected to be valid against the Informant JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/Informant' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Informant;
