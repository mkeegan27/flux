import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.element.TermMapping.
 */
class TermMapping {

  /**
   * Get the value (aliases coding).
   * @returns {Coding} The shr.core.Coding
   */
  get value() {
    return this._coding;
  }

  /**
   * Set the value (aliases coding).
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   */
  set value(value) {
    this._coding = value;
  }

  /**
   * Set the value (aliases coding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   * @returns {TermMapping} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Coding.
   * @returns {Coding} The shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   * @returns {TermMapping} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Get the Match.
   * @returns {Match} The cimi.element.Match
   */
  get match() {
    return this._match;
  }

  /**
   * Set the Match.
   * This field/value is required.
   * @param {Match} match - The cimi.element.Match
   */
  set match(match) {
    this._match = match;
  }

  /**
   * Set the Match and return 'this' for chaining.
   * This field/value is required.
   * @param {Match} match - The cimi.element.Match
   * @returns {TermMapping} this.
   */
  withMatch(match) {
    this.match = match; return this;
  }

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.core.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.core.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose and return 'this' for chaining.
   * @param {Purpose} purpose - The shr.core.Purpose
   * @returns {TermMapping} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TermMapping class.
   * The JSON must be valid against the TermMapping JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TermMapping} An instance of TermMapping populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TermMapping();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TermMapping class to a JSON object.
   * The JSON is expected to be valid against the TermMapping JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/element/TermMapping' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.match != null) {
      inst['Match'] = typeof this.match.toJSON === 'function' ? this.match.toJSON() : this.match;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TermMapping class to a FHIR object.
   * The FHIR is expected to be valid against the TermMapping FHIR profile, but no validation checks are performed.
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
export default TermMapping;
