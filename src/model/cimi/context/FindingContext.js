import { setPropertiesFromJSON } from '../../json-helper';

import StatementContext from './StatementContext';

/**
 * Generated class for cimi.context.FindingContext.
 * @extends StatementContext
 */
class FindingContext extends StatementContext {

  /**
   * Deserializes JSON data to an instance of the FindingContext class.
   * The JSON must be valid against the FindingContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingContext} An instance of FindingContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FindingContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingContext class to a JSON object.
   * The JSON is expected to be valid against the FindingContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/FindingContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    return inst;
  }
  /**
   * Serializes an instance of the FindingContext class to a FHIR object.
   * The FHIR is expected to be valid against the FindingContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default FindingContext;
