import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.entity.SpecimenTreatment.
 */
class SpecimenTreatment {

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
   * @returns {SpecimenTreatment} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Additive array.
   * @returns {Array<Additive>} The cimi.entity.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The cimi.entity.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Set the Additive array and return 'this' for chaining.
   * @param {Array<Additive>} additive - The cimi.entity.Additive array
   * @returns {SpecimenTreatment} this.
   */
  withAdditive(additive) {
    this.additive = additive; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenTreatment class.
   * The JSON must be valid against the SpecimenTreatment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenTreatment} An instance of SpecimenTreatment populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenTreatment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenTreatment class to a JSON object.
   * The JSON is expected to be valid against the SpecimenTreatment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/SpecimenTreatment' };
    if (this.additive != null) {
      inst['Additive'] = this.additive.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenTreatment class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenTreatment FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.additive != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.additive.toFHIR(true));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-entity-SpecimenTreatment-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default SpecimenTreatment;
