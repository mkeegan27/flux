import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.procedure.PartOfProcedure.
 */
class PartOfProcedure {

  /**
   * Get the value (aliases procedurePerformedStatement).
   * @returns {Reference} The cimi.procedure.ProcedurePerformedStatement reference
   */
  get value() {
    return this._procedurePerformedStatement;
  }

  /**
   * Set the value (aliases procedurePerformedStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.procedure.ProcedurePerformedStatement reference
   */
  set value(value) {
    this._procedurePerformedStatement = value;
  }

  /**
   * Set the value (aliases procedurePerformedStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.procedure.ProcedurePerformedStatement reference
   * @returns {PartOfProcedure} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.procedure.ProcedurePerformedStatement reference.
   * @returns {Reference} The cimi.procedure.ProcedurePerformedStatement reference
   */
  get procedurePerformedStatement() {
    return this._procedurePerformedStatement;
  }

  /**
   * Set the cimi.procedure.ProcedurePerformedStatement reference.
   * This field/value is required.
   * @param {Reference} procedurePerformedStatement - The cimi.procedure.ProcedurePerformedStatement reference
   */
  set procedurePerformedStatement(procedurePerformedStatement) {
    this._procedurePerformedStatement = procedurePerformedStatement;
  }

  /**
   * Set the cimi.procedure.ProcedurePerformedStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} procedurePerformedStatement - The cimi.procedure.ProcedurePerformedStatement reference
   * @returns {PartOfProcedure} this.
   */
  withProcedurePerformedStatement(procedurePerformedStatement) {
    this.procedurePerformedStatement = procedurePerformedStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PartOfProcedure class.
   * The JSON must be valid against the PartOfProcedure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PartOfProcedure} An instance of PartOfProcedure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PartOfProcedure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PartOfProcedure class to a JSON object.
   * The JSON is expected to be valid against the PartOfProcedure JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/PartOfProcedure' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default PartOfProcedure;
