import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for shr.action.RequestedAgainstContext.
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/RequestedAgainstContext' } };
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    return inst;
  }
}
export default RequestedAgainstContext;
