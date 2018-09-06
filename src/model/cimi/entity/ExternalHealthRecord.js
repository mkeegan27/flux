import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for cimi.entity.ExternalHealthRecord.
 * @extends Entity
 */
class ExternalHealthRecord extends Entity {

  /**
   * Get the Identifier.
   * @returns {Identifier} The cimi.element.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * This field/value is required.
   * @param {Identifier} identifier - The cimi.element.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * This field/value is required.
   * @param {Identifier} identifier - The cimi.element.Identifier
   * @returns {ExternalHealthRecord} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the AccessTime.
   * @returns {AccessTime} The cimi.entity.AccessTime
   */
  get accessTime() {
    return this._accessTime;
  }

  /**
   * Set the AccessTime.
   * This field/value is required.
   * @param {AccessTime} accessTime - The cimi.entity.AccessTime
   */
  set accessTime(accessTime) {
    this._accessTime = accessTime;
  }

  /**
   * Set the AccessTime and return 'this' for chaining.
   * This field/value is required.
   * @param {AccessTime} accessTime - The cimi.entity.AccessTime
   * @returns {ExternalHealthRecord} this.
   */
  withAccessTime(accessTime) {
    this.accessTime = accessTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExternalHealthRecord class.
   * The JSON must be valid against the ExternalHealthRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExternalHealthRecord} An instance of ExternalHealthRecord populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExternalHealthRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ExternalHealthRecord class to a JSON object.
   * The JSON is expected to be valid against the ExternalHealthRecord JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/ExternalHealthRecord' } };
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.accessTime != null) {
      inst['AccessTime'] = typeof this.accessTime.toJSON === 'function' ? this.accessTime.toJSON() : this.accessTime;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ExternalHealthRecord class to a FHIR object.
   * The FHIR is expected to be valid against the ExternalHealthRecord FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ExternalHealthRecord;
