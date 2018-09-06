import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.entity.Headshot.
 */
class Headshot {

  /**
   * Get the value (aliases media).
   * @returns {Media} The shr.core.Media
   */
  get value() {
    return this._media;
  }

  /**
   * Set the value (aliases media).
   * This field/value is required.
   * @param {Media} value - The shr.core.Media
   */
  set value(value) {
    this._media = value;
  }

  /**
   * Set the value (aliases media) and return 'this' for chaining.
   * This field/value is required.
   * @param {Media} value - The shr.core.Media
   * @returns {Headshot} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Media.
   * @returns {Media} The shr.core.Media
   */
  get media() {
    return this._media;
  }

  /**
   * Set the Media.
   * This field/value is required.
   * @param {Media} media - The shr.core.Media
   */
  set media(media) {
    this._media = media;
  }

  /**
   * Set the Media and return 'this' for chaining.
   * This field/value is required.
   * @param {Media} media - The shr.core.Media
   * @returns {Headshot} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Headshot class.
   * The JSON must be valid against the Headshot JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Headshot} An instance of Headshot populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Headshot();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Headshot class to a JSON object.
   * The JSON is expected to be valid against the Headshot JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Headshot' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Headshot class to a FHIR object.
   * The FHIR is expected to be valid against the Headshot FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-entity-Headshot-extension';
      inst['valueAttachment'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Headshot;
