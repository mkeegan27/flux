import { setPropertiesFromJSON } from '../../json-helper';

import Independent from '../core/Independent';

/**
 * Generated class for cimi.composition.Composition.
 * @extends Independent
 */
class Composition extends Independent {

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
   * @returns {Composition} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Section array.
   * @returns {Array<Section>} The cimi.composition.Section array
   */
  get section() {
    return this._section;
  }

  /**
   * Set the Section array.
   * @param {Array<Section>} section - The cimi.composition.Section array
   */
  set section(section) {
    this._section = section;
  }

  /**
   * Set the Section array and return 'this' for chaining.
   * @param {Array<Section>} section - The cimi.composition.Section array
   * @returns {Composition} this.
   */
  withSection(section) {
    this.section = section; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Composition class.
   * The JSON must be valid against the Composition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Composition} An instance of Composition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Composition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Composition class to a JSON object.
   * The JSON is expected to be valid against the Composition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/composition/Composition' };
    if (this.section != null) {
      inst['Section'] = this.section.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Composition class to a FHIR object.
   * The FHIR is expected to be valid against the Composition FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Composition';
    if (this.section != null) {
      inst['section'] = inst ['section'] || [];
      inst['section'].concat(this.section.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.section != null && this.section.clinicalStatement != null) {
      if(inst['section'] === undefined) {
        inst['section'] = {};
      }
      inst['section']['entry'] = inst ['section']['entry'] || [];
      inst['section']['entry'].concat(this.section.clinicalStatement.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default Composition;
