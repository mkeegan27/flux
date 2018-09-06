import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for cimi.context.RequestedAgainstContext.
 * @extends ActionContext
 */
class RequestedAgainstContext extends ActionContext {

  /**
   * Deserializes JSON data to an instance of the RequestedAgainstContext class.
   * The JSON must be valid against the RequestedAgainstContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestedAgainstContext} An instance of RequestedAgainstContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestedAgainstContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RequestedAgainstContext class to a JSON object.
   * The JSON is expected to be valid against the RequestedAgainstContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/RequestedAgainstContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the RequestedAgainstContext class to a FHIR object.
   * The FHIR is expected to be valid against the RequestedAgainstContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.contextCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.encounter.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.reason.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-RequestedAgainstContext-extension';
    }
    return inst;
  }
}
export default RequestedAgainstContext;
