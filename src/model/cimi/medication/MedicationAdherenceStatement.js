import { setPropertiesFromJSON } from '../../json-helper';

import SimpleCodedNonLaboratoryObservation from '../statement/SimpleCodedNonLaboratoryObservation';

/**
 * Generated class for cimi.medication.MedicationAdherenceStatement.
 * @extends SimpleCodedNonLaboratoryObservation
 */
class MedicationAdherenceStatement extends SimpleCodedNonLaboratoryObservation {

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
   * @returns {MedicationAdherenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ObservationTopic.
   * @returns {ObservationTopic} The cimi.topic.ObservationTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ObservationTopic.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   * @returns {MedicationAdherenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the ObservationContext.
   * @returns {ObservationContext} The cimi.context.ObservationContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the ObservationContext.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the ObservationContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   * @returns {MedicationAdherenceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Get the MedicationNonAdherenceReason array.
   * @returns {Array<MedicationNonAdherenceReason>} The cimi.medication.MedicationNonAdherenceReason array
   */
  get medicationNonAdherenceReason() {
    return this._medicationNonAdherenceReason;
  }

  /**
   * Set the MedicationNonAdherenceReason array.
   * @param {Array<MedicationNonAdherenceReason>} medicationNonAdherenceReason - The cimi.medication.MedicationNonAdherenceReason array
   */
  set medicationNonAdherenceReason(medicationNonAdherenceReason) {
    this._medicationNonAdherenceReason = medicationNonAdherenceReason;
  }

  /**
   * Set the MedicationNonAdherenceReason array and return 'this' for chaining.
   * @param {Array<MedicationNonAdherenceReason>} medicationNonAdherenceReason - The cimi.medication.MedicationNonAdherenceReason array
   * @returns {MedicationAdherenceStatement} this.
   */
  withMedicationNonAdherenceReason(medicationNonAdherenceReason) {
    this.medicationNonAdherenceReason = medicationNonAdherenceReason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationAdherenceStatement class.
   * The JSON must be valid against the MedicationAdherenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationAdherenceStatement} An instance of MedicationAdherenceStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationAdherenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationAdherenceStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationAdherenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationAdherenceStatement' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    if (this.medicationNonAdherenceReason != null) {
      inst['MedicationNonAdherenceReason'] = this.medicationNonAdherenceReason.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationAdherenceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationAdherenceStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.medicationNonAdherenceReason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medicationNonAdherenceReason.toFHIR(true));
    }
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default MedicationAdherenceStatement;
