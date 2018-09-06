import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for cimi.entity.MaterializedAssertion.
 * @extends Entity
 */
class MaterializedAssertion extends Entity {

  /**
   * Get the value (aliases conditionPresenceStatement).
   * @returns {Reference} The cimi.statement.ConditionPresenceStatement reference
   */
  get value() {
    return this._conditionPresenceStatement;
  }

  /**
   * Set the value (aliases conditionPresenceStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ConditionPresenceStatement reference
   */
  set value(value) {
    this._conditionPresenceStatement = value;
  }

  /**
   * Set the value (aliases conditionPresenceStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ConditionPresenceStatement reference
   * @returns {MaterializedAssertion} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.statement.ConditionPresenceStatement reference.
   * @returns {Reference} The cimi.statement.ConditionPresenceStatement reference
   */
  get conditionPresenceStatement() {
    return this._conditionPresenceStatement;
  }

  /**
   * Set the cimi.statement.ConditionPresenceStatement reference.
   * This field/value is required.
   * @param {Reference} conditionPresenceStatement - The cimi.statement.ConditionPresenceStatement reference
   */
  set conditionPresenceStatement(conditionPresenceStatement) {
    this._conditionPresenceStatement = conditionPresenceStatement;
  }

  /**
   * Set the cimi.statement.ConditionPresenceStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} conditionPresenceStatement - The cimi.statement.ConditionPresenceStatement reference
   * @returns {MaterializedAssertion} this.
   */
  withConditionPresenceStatement(conditionPresenceStatement) {
    this.conditionPresenceStatement = conditionPresenceStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MaterializedAssertion class.
   * The JSON must be valid against the MaterializedAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MaterializedAssertion} An instance of MaterializedAssertion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MaterializedAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MaterializedAssertion class to a JSON object.
   * The JSON is expected to be valid against the MaterializedAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/MaterializedAssertion' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MaterializedAssertion class to a FHIR object.
   * The FHIR is expected to be valid against the MaterializedAssertion FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default MaterializedAssertion;
