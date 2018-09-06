import { setPropertiesFromJSON } from '../../json-helper';

import SubjectIfNotPersonOfRecord from '../core/SubjectIfNotPersonOfRecord';

/**
 * Generated class for cimi.encounter.PatientOrGroup.
 * @extends SubjectIfNotPersonOfRecord
 */
class PatientOrGroup extends SubjectIfNotPersonOfRecord {

  /**
   * Get the choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference.
   * @returns {Reference} The choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.Group reference
   * @returns {PatientOrGroup} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PatientOrGroup class.
   * The JSON must be valid against the PatientOrGroup JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PatientOrGroup} An instance of PatientOrGroup populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PatientOrGroup();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PatientOrGroup class to a JSON object.
   * The JSON is expected to be valid against the PatientOrGroup JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/encounter/PatientOrGroup' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }
}
export default PatientOrGroup;
