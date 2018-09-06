import { setPropertiesFromJSON } from '../../json-helper';

import FindingContext from './FindingContext';

/**
 * Generated class for cimi.context.ExpectationContext.
 * @extends FindingContext
 */
class ExpectationContext extends FindingContext {

  /**
   * Get the ContextCode.
   * @returns {ContextCode} The cimi.context.ContextCode
   */
  get contextCode() {
    return this._contextCode;
  }

  /**
   * Set the ContextCode.
   * This field/value is required.
   * @param {ContextCode} contextCode - The cimi.context.ContextCode
   */
  set contextCode(contextCode) {
    this._contextCode = contextCode;
  }

  /**
   * Set the ContextCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ContextCode} contextCode - The cimi.context.ContextCode
   * @returns {ExpectationContext} this.
   */
  withContextCode(contextCode) {
    this.contextCode = contextCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectationContext class.
   * The JSON must be valid against the ExpectationContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectationContext} An instance of ExpectationContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectationContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ExpectationContext class to a JSON object.
   * The JSON is expected to be valid against the ExpectationContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/ExpectationContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ExpectationContext class to a FHIR object.
   * The FHIR is expected to be valid against the ExpectationContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ExpectationContext;
