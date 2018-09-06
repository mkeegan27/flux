import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureTopic from './ProcedureTopic';

/**
 * Generated class for cimi.procedure.LaboratoryProcedureTopic.
 * @extends ProcedureTopic
 */
class LaboratoryProcedureTopic extends ProcedureTopic {

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The cimi.topic.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   * @returns {LaboratoryProcedureTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Category.
   * @returns {Category} The shr.core.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * @param {Category} category - The shr.core.Category
   * @returns {LaboratoryProcedureTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the cimi.entity.Specimen reference.
   * @returns {Reference} The cimi.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference and return 'this' for chaining.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   * @returns {LaboratoryProcedureTopic} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryProcedureTopic class.
   * The JSON must be valid against the LaboratoryProcedureTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryProcedureTopic} An instance of LaboratoryProcedureTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryProcedureTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryProcedureTopic class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryProcedureTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/LaboratoryProcedureTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.reason != null) {
      inst['Reason'] = typeof this.reason.toJSON === 'function' ? this.reason.toJSON() : this.reason;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.inputFinding != null) {
      inst['InputFinding'] = this.inputFinding.map(f => f.toJSON());
    }
    if (this.indication != null) {
      inst['Indication'] = this.indication.map(f => f.toJSON());
    }
    if (this.device != null) {
      inst['Device'] = this.device.map(f => f.toJSON());
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryProcedureTopic class to a FHIR object.
   * The FHIR is expected to be valid against the LaboratoryProcedureTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default LaboratoryProcedureTopic;
