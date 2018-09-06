import { setPropertiesFromJSON } from '../../json-helper';

import ActionTopic from '../topic/ActionTopic';

/**
 * Generated class for cimi.medication.MedicationTopic.
 * @extends ActionTopic
 */
class MedicationTopic extends ActionTopic {

  /**
   * Get the Medication.
   * @returns {Medication} The cimi.entity.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Set the Medication.
   * This field/value is required.
   * @param {Medication} medication - The cimi.entity.Medication
   */
  set medication(medication) {
    this._medication = medication;
  }

  /**
   * Set the Medication and return 'this' for chaining.
   * This field/value is required.
   * @param {Medication} medication - The cimi.entity.Medication
   * @returns {MedicationTopic} this.
   */
  withMedication(medication) {
    this.medication = medication; return this;
  }

  /**
   * Get the Dosage.
   * @returns {Dosage} The cimi.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Set the Dosage.
   * @param {Dosage} dosage - The cimi.medication.Dosage
   */
  set dosage(dosage) {
    this._dosage = dosage;
  }

  /**
   * Set the Dosage and return 'this' for chaining.
   * @param {Dosage} dosage - The cimi.medication.Dosage
   * @returns {MedicationTopic} this.
   */
  withDosage(dosage) {
    this.dosage = dosage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationTopic class.
   * The JSON must be valid against the MedicationTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationTopic} An instance of MedicationTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationTopic class to a JSON object.
   * The JSON is expected to be valid against the MedicationTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationTopic class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.medication != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medication.toFHIR(true));
    }
    if (this.dosage != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.dosage.toFHIR(true));
    }
    return inst;
  }
}
export default MedicationTopic;
