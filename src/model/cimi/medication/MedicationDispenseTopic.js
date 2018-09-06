import { setPropertiesFromJSON } from '../../json-helper';

import MedicationTopic from './MedicationTopic';

/**
 * Generated class for cimi.medication.MedicationDispenseTopic.
 * @extends MedicationTopic
 */
class MedicationDispenseTopic extends MedicationTopic {

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
   * @returns {MedicationDispenseTopic} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the NumberOfRefillsAllowed.
   * @returns {NumberOfRefillsAllowed} The cimi.medication.NumberOfRefillsAllowed
   */
  get numberOfRefillsAllowed() {
    return this._numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The cimi.medication.NumberOfRefillsAllowed
   */
  set numberOfRefillsAllowed(numberOfRefillsAllowed) {
    this._numberOfRefillsAllowed = numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed and return 'this' for chaining.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The cimi.medication.NumberOfRefillsAllowed
   * @returns {MedicationDispenseTopic} this.
   */
  withNumberOfRefillsAllowed(numberOfRefillsAllowed) {
    this.numberOfRefillsAllowed = numberOfRefillsAllowed; return this;
  }

  /**
   * Get the QuantityPerDispense.
   * @returns {QuantityPerDispense} The cimi.medication.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense.
   * @param {QuantityPerDispense} quantityPerDispense - The cimi.medication.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispense) {
    this._quantityPerDispense = quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense and return 'this' for chaining.
   * @param {QuantityPerDispense} quantityPerDispense - The cimi.medication.QuantityPerDispense
   * @returns {MedicationDispenseTopic} this.
   */
  withQuantityPerDispense(quantityPerDispense) {
    this.quantityPerDispense = quantityPerDispense; return this;
  }

  /**
   * Get the SupplyDuration.
   * @returns {SupplyDuration} The cimi.medication.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Set the SupplyDuration.
   * @param {SupplyDuration} supplyDuration - The cimi.medication.SupplyDuration
   */
  set supplyDuration(supplyDuration) {
    this._supplyDuration = supplyDuration;
  }

  /**
   * Set the SupplyDuration and return 'this' for chaining.
   * @param {SupplyDuration} supplyDuration - The cimi.medication.SupplyDuration
   * @returns {MedicationDispenseTopic} this.
   */
  withSupplyDuration(supplyDuration) {
    this.supplyDuration = supplyDuration; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationDispenseTopic class.
   * The JSON must be valid against the MedicationDispenseTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispenseTopic} An instance of MedicationDispenseTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispenseTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationDispenseTopic class to a JSON object.
   * The JSON is expected to be valid against the MedicationDispenseTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/medication/MedicationDispenseTopic' };
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
    if (this.numberOfRefillsAllowed != null) {
      inst['NumberOfRefillsAllowed'] = typeof this.numberOfRefillsAllowed.toJSON === 'function' ? this.numberOfRefillsAllowed.toJSON() : this.numberOfRefillsAllowed;
    }
    if (this.quantityPerDispense != null) {
      inst['QuantityPerDispense'] = typeof this.quantityPerDispense.toJSON === 'function' ? this.quantityPerDispense.toJSON() : this.quantityPerDispense;
    }
    if (this.supplyDuration != null) {
      inst['SupplyDuration'] = typeof this.supplyDuration.toJSON === 'function' ? this.supplyDuration.toJSON() : this.supplyDuration;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationDispenseTopic class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationDispenseTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
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
    if (this.numberOfRefillsAllowed != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.numberOfRefillsAllowed.toFHIR(true));
    }
    if (this.quantityPerDispense != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.quantityPerDispense.toFHIR(true));
    }
    if (this.supplyDuration != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.supplyDuration.toFHIR(true));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-medication-MedicationDispenseTopic-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default MedicationDispenseTopic;
