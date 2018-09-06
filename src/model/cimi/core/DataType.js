import { setPropertiesFromJSON } from '../../json-helper';

import NonIndependent from './NonIndependent';

/**
 * Generated class for cimi.core.DataType.
 * @extends NonIndependent
 */
class DataType extends NonIndependent {

  /**
   * Deserializes JSON data to an instance of the DataType class.
   * The JSON must be valid against the DataType JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DataType} An instance of DataType populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DataType();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DataType class to a JSON object.
   * The JSON is expected to be valid against the DataType JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/DataType' } };
    return inst;
  }
  /**
   * Serializes an instance of the DataType class to a FHIR object.
   * The FHIR is expected to be valid against the DataType FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default DataType;
