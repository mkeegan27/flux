import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.RelatedRequest.
 */
class RelatedRequest {

  /**
   * Get the value (aliases actionRequestedStatement).
   * @returns {Reference} The cimi.statement.ActionRequestedStatement reference
   */
  get value() {
    return this._actionRequestedStatement;
  }

  /**
   * Set the value (aliases actionRequestedStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ActionRequestedStatement reference
   */
  set value(value) {
    this._actionRequestedStatement = value;
  }

  /**
   * Set the value (aliases actionRequestedStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ActionRequestedStatement reference
   * @returns {RelatedRequest} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.statement.ActionRequestedStatement reference.
   * @returns {Reference} The cimi.statement.ActionRequestedStatement reference
   */
  get actionRequestedStatement() {
    return this._actionRequestedStatement;
  }

  /**
   * Set the cimi.statement.ActionRequestedStatement reference.
   * This field/value is required.
   * @param {Reference} actionRequestedStatement - The cimi.statement.ActionRequestedStatement reference
   */
  set actionRequestedStatement(actionRequestedStatement) {
    this._actionRequestedStatement = actionRequestedStatement;
  }

  /**
   * Set the cimi.statement.ActionRequestedStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} actionRequestedStatement - The cimi.statement.ActionRequestedStatement reference
   * @returns {RelatedRequest} this.
   */
  withActionRequestedStatement(actionRequestedStatement) {
    this.actionRequestedStatement = actionRequestedStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedRequest class.
   * The JSON must be valid against the RelatedRequest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedRequest} An instance of RelatedRequest populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RelatedRequest();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RelatedRequest class to a JSON object.
   * The JSON is expected to be valid against the RelatedRequest JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/RelatedRequest' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the RelatedRequest class to a FHIR object.
   * The FHIR is expected to be valid against the RelatedRequest FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-RelatedRequest-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default RelatedRequest;
