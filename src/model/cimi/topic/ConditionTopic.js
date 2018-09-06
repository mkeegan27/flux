import { setPropertiesFromJSON } from '../../json-helper';

import AssertionTopic from './AssertionTopic';

/**
 * Generated class for cimi.topic.ConditionTopic.
 * @extends AssertionTopic
 */
class ConditionTopic extends AssertionTopic {

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
   * @returns {ConditionTopic} this.
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
   * @returns {ConditionTopic} this.
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
   * @returns {ConditionTopic} this.
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
   * @returns {ConditionTopic} this.
   */
  withConditionCause(conditionCause) {
    this.conditionCause = conditionCause; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionTopic class.
   * The JSON must be valid against the ConditionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionTopic} An instance of ConditionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConditionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ConditionTopic class to a JSON object.
   * The JSON is expected to be valid against the ConditionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/ConditionTopic' } };
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
    return inst;
  }
}
export default ConditionTopic;
