import { setPropertiesFromJSON } from '../../json-helper';

import Content from './Content';

/**
 * Generated class for cimi.core.InformationEntry.
 * @extends Content
 */
class InformationEntry extends Content {

  /**
   * Get the cimi.core.PersonOfRecord reference.
   * @returns {Reference} The cimi.core.PersonOfRecord reference
   */
  get personOfRecord() {
    return this._personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   */
  set personOfRecord(personOfRecord) {
    this._personOfRecord = personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference and return 'this' for chaining.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   * @returns {InformationEntry} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the InformationEntry class.
   * The JSON must be valid against the InformationEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {InformationEntry} An instance of InformationEntry populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new InformationEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the InformationEntry class to a JSON object.
   * The JSON is expected to be valid against the InformationEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/InformationEntry' } };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    return inst;
  }
  /**
   * Serializes an instance of the InformationEntry class to a FHIR object.
   * The FHIR is expected to be valid against the InformationEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default InformationEntry;
