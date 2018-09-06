import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from '../statement/ClinicalStatement';

/**
 * Generated class for cimi.allergy.NoAdverseSensitivityToSubstanceStatement.
 * @extends ClinicalStatement
 */
class NoAdverseSensitivityToSubstanceStatement extends ClinicalStatement {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {NoAdverseSensitivityToSubstanceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the cimi.core.PersonOfRecord reference.
   * @returns {Reference} The cimi.core.PersonOfRecord reference
   */
  get personOfRecord() {
    return this._personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference.
   * This field/value is required.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   */
  set personOfRecord(personOfRecord) {
    this._personOfRecord = personOfRecord;
  }

  /**
   * Set the cimi.core.PersonOfRecord reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} personOfRecord - The cimi.core.PersonOfRecord reference
   * @returns {NoAdverseSensitivityToSubstanceStatement} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
  }

  /**
   * Get the AdverseSensitivityTopic.
   * @returns {AdverseSensitivityTopic} The cimi.allergy.AdverseSensitivityTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the AdverseSensitivityTopic.
   * This field/value is required.
   * @param {AdverseSensitivityTopic} statementTopic - The cimi.allergy.AdverseSensitivityTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the AdverseSensitivityTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseSensitivityTopic} statementTopic - The cimi.allergy.AdverseSensitivityTopic
   * @returns {NoAdverseSensitivityToSubstanceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the AbsenceContext.
   * @returns {AbsenceContext} The cimi.context.AbsenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the AbsenceContext.
   * This field/value is required.
   * @param {AbsenceContext} statementContext - The cimi.context.AbsenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the AbsenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {AbsenceContext} statementContext - The cimi.context.AbsenceContext
   * @returns {NoAdverseSensitivityToSubstanceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NoAdverseSensitivityToSubstanceStatement class.
   * The JSON must be valid against the NoAdverseSensitivityToSubstanceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NoAdverseSensitivityToSubstanceStatement} An instance of NoAdverseSensitivityToSubstanceStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NoAdverseSensitivityToSubstanceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NoAdverseSensitivityToSubstanceStatement class to a JSON object.
   * The JSON is expected to be valid against the NoAdverseSensitivityToSubstanceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/allergy/NoAdverseSensitivityToSubstanceStatement' };
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
   * Serializes an instance of the NoAdverseSensitivityToSubstanceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the NoAdverseSensitivityToSubstanceStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'AllergyIntolerance';
    if (this.personOfRecord != null) {
      inst['patient'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default NoAdverseSensitivityToSubstanceStatement;
