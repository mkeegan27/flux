import { setPropertiesFromJSON } from '../../json-helper';

import Locatable from './Locatable';

/**
 * Generated class for cimi.core.Independent.
 * @extends Locatable
 */
class Independent extends Locatable {

  /**
   * Deserializes JSON data to an instance of the Independent class.
   * The JSON must be valid against the Independent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Independent} An instance of Independent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Independent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Independent class to a JSON object.
   * The JSON is expected to be valid against the Independent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/Independent' } };
    return inst;
  }
  /**
   * Serializes an instance of the Independent class to a FHIR object.
   * The FHIR is expected to be valid against the Independent FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default Independent;
