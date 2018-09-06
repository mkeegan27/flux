import { setPropertiesFromJSON } from '../../json-helper';

import MedicationTopic from './MedicationTopic';

/**
 * Generated class for cimi.medication.MedicationUseTopic.
 * @extends MedicationTopic
 */
class MedicationUseTopic extends MedicationTopic {

  /**
   * Deserializes JSON data to an instance of the MedicationUseTopic class.
   * The JSON must be valid against the MedicationUseTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationUseTopic} An instance of MedicationUseTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationUseTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationUseTopic class to a JSON object.
   * The JSON is expected to be valid against the MedicationUseTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationUseTopic' } };
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
   * Serializes an instance of the MedicationUseTopic class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationUseTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default MedicationUseTopic;
