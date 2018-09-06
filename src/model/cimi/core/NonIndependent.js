import { setPropertiesFromJSON } from '../../json-helper';

import Locatable from './Locatable';

/**
 * Generated class for cimi.core.NonIndependent.
 * @extends Locatable
 */
class NonIndependent extends Locatable {

  /**
   * Deserializes JSON data to an instance of the NonIndependent class.
   * The JSON must be valid against the NonIndependent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NonIndependent} An instance of NonIndependent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NonIndependent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NonIndependent class to a JSON object.
   * The JSON is expected to be valid against the NonIndependent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/NonIndependent' } };
    return inst;
  }
  /**
   * Serializes an instance of the NonIndependent class to a FHIR object.
   * The FHIR is expected to be valid against the NonIndependent FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default NonIndependent;
