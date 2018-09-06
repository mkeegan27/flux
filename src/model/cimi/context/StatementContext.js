import { setPropertiesFromJSON } from '../../json-helper';

import NonIndependent from '../core/NonIndependent';

/**
 * Generated class for cimi.context.StatementContext.
 * @extends NonIndependent
 */
class StatementContext extends NonIndependent {

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
   * @returns {StatementContext} this.
   */
  withContextCode(contextCode) {
    this.contextCode = contextCode; return this;
  }

  /**
   * Get the Encounter.
   * @returns {Encounter} The cimi.encounter.Encounter
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Set the Encounter.
   * @param {Encounter} encounter - The cimi.encounter.Encounter
   */
  set encounter(encounter) {
    this._encounter = encounter;
  }

  /**
   * Set the Encounter and return 'this' for chaining.
   * @param {Encounter} encounter - The cimi.encounter.Encounter
   * @returns {StatementContext} this.
   */
  withEncounter(encounter) {
    this.encounter = encounter; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StatementContext class.
   * The JSON must be valid against the StatementContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StatementContext} An instance of StatementContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StatementContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the StatementContext class to a JSON object.
   * The JSON is expected to be valid against the StatementContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/StatementContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    return inst;
  }
  /**
   * Serializes an instance of the StatementContext class to a FHIR object.
   * The FHIR is expected to be valid against the StatementContext FHIR profile, but no validation checks are performed.
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
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-StatementContext-extension';
    }
    return inst;
  }
}
export default StatementContext;
