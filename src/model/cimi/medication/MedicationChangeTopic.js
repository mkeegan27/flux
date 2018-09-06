import { setPropertiesFromJSON } from '../../json-helper';

import ActionTopic from '../topic/ActionTopic';

/**
 * Generated class for cimi.medication.MedicationChangeTopic.
 * @extends ActionTopic
 */
class MedicationChangeTopic extends ActionTopic {

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {MedicationChangeTopic} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the MedicationBeforeChange array.
   * @returns {Array<MedicationBeforeChange>} The cimi.medication.MedicationBeforeChange array
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The cimi.medication.MedicationBeforeChange array
   */
  set medicationBeforeChange(medicationBeforeChange) {
    this._medicationBeforeChange = medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array and return 'this' for chaining.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The cimi.medication.MedicationBeforeChange array
   * @returns {MedicationChangeTopic} this.
   */
  withMedicationBeforeChange(medicationBeforeChange) {
    this.medicationBeforeChange = medicationBeforeChange; return this;
  }

  /**
   * Get the MedicationAfterChange array.
   * @returns {Array<MedicationAfterChange>} The cimi.medication.MedicationAfterChange array
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The cimi.medication.MedicationAfterChange array
   */
  set medicationAfterChange(medicationAfterChange) {
    this._medicationAfterChange = medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array and return 'this' for chaining.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The cimi.medication.MedicationAfterChange array
   * @returns {MedicationChangeTopic} this.
   */
  withMedicationAfterChange(medicationAfterChange) {
    this.medicationAfterChange = medicationAfterChange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChangeTopic class.
   * The JSON must be valid against the MedicationChangeTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChangeTopic} An instance of MedicationChangeTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationChangeTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationChangeTopic class to a JSON object.
   * The JSON is expected to be valid against the MedicationChangeTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationChangeTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.medicationBeforeChange != null) {
      inst['MedicationBeforeChange'] = this.medicationBeforeChange.map(f => f.toJSON());
    }
    if (this.medicationAfterChange != null) {
      inst['MedicationAfterChange'] = this.medicationAfterChange.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationChangeTopic class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationChangeTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medicationBeforeChange.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medicationAfterChange.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-medication-MedicationChangeTopic-extension';
    }
    return inst;
  }
}
export default MedicationChangeTopic;
