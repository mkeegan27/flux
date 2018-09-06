import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureRequestedStatement from './ProcedureRequestedStatement';

/**
 * Generated class for cimi.procedure.SpecimenCollectionRequestedStatement.
 * @extends ProcedureRequestedStatement
 */
class SpecimenCollectionRequestedStatement extends ProcedureRequestedStatement {

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
   * @returns {SpecimenCollectionRequestedStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the SpecimenCollectionTopic.
   * @returns {SpecimenCollectionTopic} The cimi.procedure.SpecimenCollectionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the SpecimenCollectionTopic.
   * This field/value is required.
   * @param {SpecimenCollectionTopic} statementTopic - The cimi.procedure.SpecimenCollectionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the SpecimenCollectionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {SpecimenCollectionTopic} statementTopic - The cimi.procedure.SpecimenCollectionTopic
   * @returns {SpecimenCollectionRequestedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionRequestedStatement class.
   * The JSON must be valid against the SpecimenCollectionRequestedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionRequestedStatement} An instance of SpecimenCollectionRequestedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionRequestedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionRequestedStatement class to a JSON object.
   * The JSON is expected to be valid against the SpecimenCollectionRequestedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/SpecimenCollectionRequestedStatement' };
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
   * Serializes an instance of the SpecimenCollectionRequestedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenCollectionRequestedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'ProcedureRequest';
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default SpecimenCollectionRequestedStatement;
