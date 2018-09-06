import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.Locatable.
 */
class Locatable {

  /**
   * Deserializes JSON data to an instance of the Locatable class.
   * The JSON must be valid against the Locatable JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Locatable} An instance of Locatable populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Locatable();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Locatable class to a JSON object.
   * The JSON is expected to be valid against the Locatable JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/Locatable' } };
    return inst;
  }
  /**
   * Serializes an instance of the Locatable class to a FHIR object.
   * The FHIR is expected to be valid against the Locatable FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default Locatable;
