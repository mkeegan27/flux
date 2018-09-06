import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.PersonOfRecord.
 */
class PersonOfRecord {

  /**
   * Get the value (aliases person).
   * @returns {Reference} The cimi.entity.Person reference
   */
  get value() {
    return this._person;
  }

  /**
   * Set the value (aliases person).
   * This field/value is required.
   * @param {Reference} value - The cimi.entity.Person reference
   */
  set value(value) {
    this._person = value;
  }

  /**
   * Set the value (aliases person) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.entity.Person reference
   * @returns {PersonOfRecord} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * @returns {PersonOfRecord} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PersonOfRecord class.
   * The JSON must be valid against the PersonOfRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PersonOfRecord} An instance of PersonOfRecord populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PersonOfRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PersonOfRecord class to a JSON object.
   * The JSON is expected to be valid against the PersonOfRecord JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/PersonOfRecord' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PersonOfRecord class to a FHIR object.
   * The FHIR is expected to be valid against the PersonOfRecord FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-core-PersonOfRecord-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default PersonOfRecord;
