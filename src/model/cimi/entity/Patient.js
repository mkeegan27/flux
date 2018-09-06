import { setPropertiesFromJSON } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for cimi.entity.Patient.
 * @extends Role
 */
class Patient extends Role {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Patient} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the cimi.entity.Person reference.
   * @returns {Reference} The cimi.entity.Person reference
   */
  get person() {
    return this._person;
  }

  /**
   * Set the cimi.entity.Person reference.
   * This field/value is required.
   * @param {Reference} person - The cimi.entity.Person reference
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the cimi.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} person - The cimi.entity.Person reference
   * @returns {Patient} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Patient class.
   * The JSON must be valid against the Patient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Patient} An instance of Patient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Patient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Patient class to a JSON object.
   * The JSON is expected to be valid against the Patient JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Patient' };
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Patient class to a FHIR object.
   * The FHIR is expected to be valid against the Patient FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Patient';
    if (this.person != null && this.person.activeFlag != null) {
      inst['active'] = typeof this.person.activeFlag.toFHIR === 'function' ? this.person.activeFlag.toFHIR() : this.person.activeFlag;
    }
    if (this.person != null && this.person.humanName != null) {
      inst['name'] = typeof this.person.humanName.toFHIR === 'function' ? this.person.humanName.toFHIR() : this.person.humanName;
    }
    if (this.person != null && this.person.contactPoint != null) {
      inst['telecom'] = typeof this.person.contactPoint.toFHIR === 'function' ? this.person.contactPoint.toFHIR() : this.person.contactPoint;
    }
    if (this.person != null && this.person.administrativeGender != null) {
      inst['gender'] = typeof this.person.administrativeGender.toFHIR === 'function' ? this.person.administrativeGender.toFHIR() : this.person.administrativeGender;
    }
    if (this.person != null && this.person.dateOfBirth != null) {
      inst['birthDate'] = typeof this.person.dateOfBirth.toFHIR === 'function' ? this.person.dateOfBirth.toFHIR() : this.person.dateOfBirth;
    }
    if (this.person != null && this.person.address != null) {
      inst['address'] = typeof this.person.address.toFHIR === 'function' ? this.person.address.toFHIR() : this.person.address;
    }
    if (this.person != null && this.person.headshot != null) {
      inst['photo'] = typeof this.person.headshot.toFHIR === 'function' ? this.person.headshot.toFHIR() : this.person.headshot;
    }
    if (this.person != null && this.person.languageUsed != null) {
      inst['communication'] = typeof this.person.languageUsed.toFHIR === 'function' ? this.person.languageUsed.toFHIR() : this.person.languageUsed;
    }
    return inst;
  }
}
export default Patient;
