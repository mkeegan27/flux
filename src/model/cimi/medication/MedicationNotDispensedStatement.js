import { setPropertiesFromJSON } from '../../json-helper';

import ActionNotPerformedStatement from '../statement/ActionNotPerformedStatement';

/**
 * Generated class for cimi.medication.MedicationNotDispensedStatement.
 * @extends ActionNotPerformedStatement
 */
class MedicationNotDispensedStatement extends ActionNotPerformedStatement {

  /**
   * Get the MedicationDispenseTopic.
   * @returns {MedicationDispenseTopic} The cimi.medication.MedicationDispenseTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the MedicationDispenseTopic.
   * This field/value is required.
   * @param {MedicationDispenseTopic} statementTopic - The cimi.medication.MedicationDispenseTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the MedicationDispenseTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationDispenseTopic} statementTopic - The cimi.medication.MedicationDispenseTopic
   * @returns {MedicationNotDispensedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotDispensedStatement class.
   * The JSON must be valid against the MedicationNotDispensedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotDispensedStatement} An instance of MedicationNotDispensedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotDispensedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationNotDispensedStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotDispensedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationNotDispensedStatement' } };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationNotDispensedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationNotDispensedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default MedicationNotDispensedStatement;
