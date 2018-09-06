import { setPropertiesFromJSON } from '../../json-helper';

import NoAdverseSensitivityToSubstanceStatement from './NoAdverseSensitivityToSubstanceStatement';

/**
 * Generated class for cimi.allergy.NoKnownEvironmentalAllergyStatement.
 * @extends NoAdverseSensitivityToSubstanceStatement
 */
class NoKnownEvironmentalAllergyStatement extends NoAdverseSensitivityToSubstanceStatement {

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
   * @returns {NoKnownEvironmentalAllergyStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {NoKnownEvironmentalAllergyStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NoKnownEvironmentalAllergyStatement class.
   * The JSON must be valid against the NoKnownEvironmentalAllergyStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NoKnownEvironmentalAllergyStatement} An instance of NoKnownEvironmentalAllergyStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NoKnownEvironmentalAllergyStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NoKnownEvironmentalAllergyStatement class to a JSON object.
   * The JSON is expected to be valid against the NoKnownEvironmentalAllergyStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/allergy/NoKnownEvironmentalAllergyStatement' };
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
   * Serializes an instance of the NoKnownEvironmentalAllergyStatement class to a FHIR object.
   * The FHIR is expected to be valid against the NoKnownEvironmentalAllergyStatement FHIR profile, but no validation checks are performed.
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
export default NoKnownEvironmentalAllergyStatement;
