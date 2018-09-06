import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../core/Content';

/**
 * Generated class for cimi.composition.Section.
 * @extends Content
 */
class Section extends Content {

  /**
   * Get the ClinicalStatement array.
   * @returns {Array<ClinicalStatement>} The cimi.statement.ClinicalStatement array
   */
  get clinicalStatement() {
    return this._clinicalStatement;
  }

  /**
   * Set the ClinicalStatement array.
   * @param {Array<ClinicalStatement>} clinicalStatement - The cimi.statement.ClinicalStatement array
   */
  set clinicalStatement(clinicalStatement) {
    this._clinicalStatement = clinicalStatement;
  }

  /**
   * Set the ClinicalStatement array and return 'this' for chaining.
   * @param {Array<ClinicalStatement>} clinicalStatement - The cimi.statement.ClinicalStatement array
   * @returns {Section} this.
   */
  withClinicalStatement(clinicalStatement) {
    this.clinicalStatement = clinicalStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Section class.
   * The JSON must be valid against the Section JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Section} An instance of Section populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Section();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Section class to a JSON object.
   * The JSON is expected to be valid against the Section JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/composition/Section' } };
    if (this.clinicalStatement != null) {
      inst['ClinicalStatement'] = this.clinicalStatement.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Section class to a FHIR object.
   * The FHIR is expected to be valid against the Section FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default Section;
