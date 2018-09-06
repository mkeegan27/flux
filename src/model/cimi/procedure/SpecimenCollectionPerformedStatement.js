import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformedStatement from './ProcedurePerformedStatement';

/**
 * Generated class for cimi.procedure.SpecimenCollectionPerformedStatement.
 * @extends ProcedurePerformedStatement
 */
class SpecimenCollectionPerformedStatement extends ProcedurePerformedStatement {

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
   * @returns {SpecimenCollectionPerformedStatement} this.
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
   * @returns {SpecimenCollectionPerformedStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   * @returns {SpecimenCollectionPerformedStatement} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionPerformedStatement class.
   * The JSON must be valid against the SpecimenCollectionPerformedStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionPerformedStatement} An instance of SpecimenCollectionPerformedStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionPerformedStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionPerformedStatement class to a JSON object.
   * The JSON is expected to be valid against the SpecimenCollectionPerformedStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/SpecimenCollectionPerformedStatement' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionPerformedStatement class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenCollectionPerformedStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Procedure';
    if (this.anatomicalLocation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.anatomicalLocation.toFHIR(true));
    }
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default SpecimenCollectionPerformedStatement;
