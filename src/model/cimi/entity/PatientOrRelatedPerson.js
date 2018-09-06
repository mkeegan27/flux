import { setPropertiesFromJSON } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for cimi.entity.PatientOrRelatedPerson.
 * @extends EntityOrRole
 */
class PatientOrRelatedPerson extends EntityOrRole {

  /**
   * Get the choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference.
   * @returns {Reference} The choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.RelatedPerson reference
   * @returns {PatientOrRelatedPerson} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PatientOrRelatedPerson class.
   * The JSON must be valid against the PatientOrRelatedPerson JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PatientOrRelatedPerson} An instance of PatientOrRelatedPerson populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PatientOrRelatedPerson();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PatientOrRelatedPerson class to a JSON object.
   * The JSON is expected to be valid against the PatientOrRelatedPerson JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/PatientOrRelatedPerson' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PatientOrRelatedPerson class to a FHIR object.
   * The FHIR is expected to be valid against the PatientOrRelatedPerson FHIR profile, but no validation checks are performed.
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
export default PatientOrRelatedPerson;
