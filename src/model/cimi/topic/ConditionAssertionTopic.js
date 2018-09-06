import { setPropertiesFromJSON } from '../../json-helper';

import AssertionTopic from './AssertionTopic';

/**
 * Generated class for cimi.topic.ConditionAssertionTopic.
 * @extends AssertionTopic
 */
class ConditionAssertionTopic extends AssertionTopic {

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
   * @returns {ConditionAssertionTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {ConditionAssertionTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the AnatomicalLocation array.
   * @returns {Array<AnatomicalLocation>} The cimi.element.AnatomicalLocation array
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The cimi.element.AnatomicalLocation array
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array and return 'this' for chaining.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The cimi.element.AnatomicalLocation array
   * @returns {ConditionAssertionTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the ConditionCause array.
   * @returns {Array<ConditionCause>} The cimi.topic.ConditionCause array
   */
  get conditionCause() {
    return this._conditionCause;
  }

  /**
   * Set the ConditionCause array.
   * @param {Array<ConditionCause>} conditionCause - The cimi.topic.ConditionCause array
   */
  set conditionCause(conditionCause) {
    this._conditionCause = conditionCause;
  }

  /**
   * Set the ConditionCause array and return 'this' for chaining.
   * @param {Array<ConditionCause>} conditionCause - The cimi.topic.ConditionCause array
   * @returns {ConditionAssertionTopic} this.
   */
  withConditionCause(conditionCause) {
    this.conditionCause = conditionCause; return this;
  }

  /**
   * Get the AlleviatingFactor array.
   * @returns {Array<AlleviatingFactor>} The cimi.topic.AlleviatingFactor array
   */
  get alleviatingFactor() {
    return this._alleviatingFactor;
  }

  /**
   * Set the AlleviatingFactor array.
   * @param {Array<AlleviatingFactor>} alleviatingFactor - The cimi.topic.AlleviatingFactor array
   */
  set alleviatingFactor(alleviatingFactor) {
    this._alleviatingFactor = alleviatingFactor;
  }

  /**
   * Set the AlleviatingFactor array and return 'this' for chaining.
   * @param {Array<AlleviatingFactor>} alleviatingFactor - The cimi.topic.AlleviatingFactor array
   * @returns {ConditionAssertionTopic} this.
   */
  withAlleviatingFactor(alleviatingFactor) {
    this.alleviatingFactor = alleviatingFactor; return this;
  }

  /**
   * Get the ExacerbatingFactor array.
   * @returns {Array<ExacerbatingFactor>} The cimi.topic.ExacerbatingFactor array
   */
  get exacerbatingFactor() {
    return this._exacerbatingFactor;
  }

  /**
   * Set the ExacerbatingFactor array.
   * @param {Array<ExacerbatingFactor>} exacerbatingFactor - The cimi.topic.ExacerbatingFactor array
   */
  set exacerbatingFactor(exacerbatingFactor) {
    this._exacerbatingFactor = exacerbatingFactor;
  }

  /**
   * Set the ExacerbatingFactor array and return 'this' for chaining.
   * @param {Array<ExacerbatingFactor>} exacerbatingFactor - The cimi.topic.ExacerbatingFactor array
   * @returns {ConditionAssertionTopic} this.
   */
  withExacerbatingFactor(exacerbatingFactor) {
    this.exacerbatingFactor = exacerbatingFactor; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionAssertionTopic class.
   * The JSON must be valid against the ConditionAssertionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionAssertionTopic} An instance of ConditionAssertionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConditionAssertionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ConditionAssertionTopic class to a JSON object.
   * The JSON is expected to be valid against the ConditionAssertionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/ConditionAssertionTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.conditionCause != null) {
      inst['ConditionCause'] = this.conditionCause.map(f => f.toJSON());
    }
    if (this.alleviatingFactor != null) {
      inst['AlleviatingFactor'] = this.alleviatingFactor.map(f => f.toJSON());
    }
    if (this.exacerbatingFactor != null) {
      inst['ExacerbatingFactor'] = this.exacerbatingFactor.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ConditionAssertionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the ConditionAssertionTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingMethod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.media.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.anatomicalLocation.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.conditionCause.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.alleviatingFactor.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.exacerbatingFactor.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-topic-ConditionAssertionTopic-extension';
    }
    return inst;
  }
}
export default ConditionAssertionTopic;
