import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.adverse.ActionTaken.
 */
class ActionTaken {

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * This field/value is required.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * This field/value is required.
   * @param {Details} details - The shr.core.Details
   * @returns {ActionTaken} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the cimi.statement.ActionStatement reference.
   * @returns {Reference} The cimi.statement.ActionStatement reference
   */
  get actionStatement() {
    return this._actionStatement;
  }

  /**
   * Set the cimi.statement.ActionStatement reference.
   * @param {Reference} actionStatement - The cimi.statement.ActionStatement reference
   */
  set actionStatement(actionStatement) {
    this._actionStatement = actionStatement;
  }

  /**
   * Set the cimi.statement.ActionStatement reference and return 'this' for chaining.
   * @param {Reference} actionStatement - The cimi.statement.ActionStatement reference
   * @returns {ActionTaken} this.
   */
  withActionStatement(actionStatement) {
    this.actionStatement = actionStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionTaken class.
   * The JSON must be valid against the ActionTaken JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionTaken} An instance of ActionTaken populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionTaken();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionTaken class to a JSON object.
   * The JSON is expected to be valid against the ActionTaken JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/ActionTaken' } };
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.actionStatement != null) {
      inst['ActionStatement'] = typeof this.actionStatement.toJSON === 'function' ? this.actionStatement.toJSON() : this.actionStatement;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ActionTaken class to a FHIR object.
   * The FHIR is expected to be valid against the ActionTaken FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actionStatement.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-adverse-ActionTaken-extension';
    }
    return inst;
  }
}
export default ActionTaken;
