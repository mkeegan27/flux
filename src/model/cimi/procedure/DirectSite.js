import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.procedure.DirectSite.
 */
class DirectSite {

  /**
   * Get the value (aliases anatomicalLocation).
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get value() {
    return this._anatomicalLocation;
  }

  /**
   * Set the value (aliases anatomicalLocation).
   * This field/value is required.
   * @param {AnatomicalLocation} value - The cimi.element.AnatomicalLocation
   */
  set value(value) {
    this._anatomicalLocation = value;
  }

  /**
   * Set the value (aliases anatomicalLocation) and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} value - The cimi.element.AnatomicalLocation
   * @returns {DirectSite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   * @returns {DirectSite} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DirectSite class.
   * The JSON must be valid against the DirectSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DirectSite} An instance of DirectSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DirectSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DirectSite class to a JSON object.
   * The JSON is expected to be valid against the DirectSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/DirectSite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the DirectSite class to a FHIR object.
   * The FHIR is expected to be valid against the DirectSite FHIR profile, but no validation checks are performed.
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
export default DirectSite;
