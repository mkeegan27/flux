import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.Attribution.
 */
class Attribution {

  /**
   * Get the EntityOrRole.
   * @returns {EntityOrRole} The cimi.entity.EntityOrRole
   */
  get entityOrRole() {
    return this._entityOrRole;
  }

  /**
   * Set the EntityOrRole.
   * This field/value is required.
   * @param {EntityOrRole} entityOrRole - The cimi.entity.EntityOrRole
   */
  set entityOrRole(entityOrRole) {
    this._entityOrRole = entityOrRole;
  }

  /**
   * Set the EntityOrRole and return 'this' for chaining.
   * This field/value is required.
   * @param {EntityOrRole} entityOrRole - The cimi.entity.EntityOrRole
   * @returns {Attribution} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Get the RecordedOn.
   * @returns {RecordedOn} The cimi.core.RecordedOn
   */
  get recordedOn() {
    return this._recordedOn;
  }

  /**
   * Set the RecordedOn.
   * @param {RecordedOn} recordedOn - The cimi.core.RecordedOn
   */
  set recordedOn(recordedOn) {
    this._recordedOn = recordedOn;
  }

  /**
   * Set the RecordedOn and return 'this' for chaining.
   * @param {RecordedOn} recordedOn - The cimi.core.RecordedOn
   * @returns {Attribution} this.
   */
  withRecordedOn(recordedOn) {
    this.recordedOn = recordedOn; return this;
  }

  /**
   * Get the Signature.
   * @returns {Signature} The cimi.element.Signature
   */
  get signature() {
    return this._signature;
  }

  /**
   * Set the Signature.
   * @param {Signature} signature - The cimi.element.Signature
   */
  set signature(signature) {
    this._signature = signature;
  }

  /**
   * Set the Signature and return 'this' for chaining.
   * @param {Signature} signature - The cimi.element.Signature
   * @returns {Attribution} this.
   */
  withSignature(signature) {
    this.signature = signature; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Attribution class.
   * The JSON must be valid against the Attribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Attribution} An instance of Attribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Attribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Attribution class to a JSON object.
   * The JSON is expected to be valid against the Attribution JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/Attribution' } };
    if (this.entityOrRole != null) {
      inst['EntityOrRole'] = typeof this.entityOrRole.toJSON === 'function' ? this.entityOrRole.toJSON() : this.entityOrRole;
    }
    if (this.recordedOn != null) {
      inst['RecordedOn'] = typeof this.recordedOn.toJSON === 'function' ? this.recordedOn.toJSON() : this.recordedOn;
    }
    if (this.signature != null) {
      inst['Signature'] = typeof this.signature.toJSON === 'function' ? this.signature.toJSON() : this.signature;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Attribution class to a FHIR object.
   * The FHIR is expected to be valid against the Attribution FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default Attribution;
