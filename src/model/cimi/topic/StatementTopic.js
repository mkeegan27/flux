import { setPropertiesFromJSON } from '../../json-helper';

import NonIndependent from '../core/NonIndependent';

/**
 * Generated class for cimi.topic.StatementTopic.
 * @extends NonIndependent
 */
class StatementTopic extends NonIndependent {

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
   * @returns {StatementTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StatementTopic class.
   * The JSON must be valid against the StatementTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StatementTopic} An instance of StatementTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StatementTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the StatementTopic class to a JSON object.
   * The JSON is expected to be valid against the StatementTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/StatementTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    return inst;
  }
  /**
   * Serializes an instance of the StatementTopic class to a FHIR object.
   * The FHIR is expected to be valid against the StatementTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-topic-StatementTopic-extension';
    }
    return inst;
  }
}
export default StatementTopic;
