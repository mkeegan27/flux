import { setPropertiesFromJSON } from '../../json-helper';

import FindingStatement from './FindingStatement';

/**
 * Generated class for cimi.statement.ClinicalNote.
 * @extends FindingStatement
 */
class ClinicalNote extends FindingStatement {

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
   * @returns {ClinicalNote} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the FindingTopic.
   * @returns {FindingTopic} The cimi.topic.FindingTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the FindingTopic.
   * This field/value is required.
   * @param {FindingTopic} statementTopic - The cimi.topic.FindingTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the FindingTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopic} statementTopic - The cimi.topic.FindingTopic
   * @returns {ClinicalNote} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the RecordedContext.
   * @returns {RecordedContext} The cimi.context.RecordedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the RecordedContext.
   * This field/value is required.
   * @param {RecordedContext} statementContext - The cimi.context.RecordedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the RecordedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RecordedContext} statementContext - The cimi.context.RecordedContext
   * @returns {ClinicalNote} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicalNote class.
   * The JSON must be valid against the ClinicalNote JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicalNote} An instance of ClinicalNote populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ClinicalNote();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ClinicalNote class to a JSON object.
   * The JSON is expected to be valid against the ClinicalNote JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/ClinicalNote' };
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
   * Serializes an instance of the ClinicalNote class to a FHIR object.
   * The FHIR is expected to be valid against the ClinicalNote FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default ClinicalNote;
