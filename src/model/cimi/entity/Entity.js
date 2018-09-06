import { setPropertiesFromJSON } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for cimi.entity.Entity.
 * @extends EntityOrRole
 */
class Entity extends EntityOrRole {

  /**
   * Deserializes JSON data to an instance of the Entity class.
   * The JSON must be valid against the Entity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Entity} An instance of Entity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Entity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Entity class to a JSON object.
   * The JSON is expected to be valid against the Entity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Entity' } };
    return inst;
  }
  /**
   * Serializes an instance of the Entity class to a FHIR object.
   * The FHIR is expected to be valid against the Entity FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default Entity;
