import { setPropertiesFromJSON } from '../../json-helper';

import StatementTopic from './StatementTopic';

/**
 * Generated class for cimi.topic.ActionTopic.
 * @extends StatementTopic
 */
class ActionTopic extends StatementTopic {

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
   * @returns {ActionTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionTopic class.
   * The JSON must be valid against the ActionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionTopic} An instance of ActionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionTopic class to a JSON object.
   * The JSON is expected to be valid against the ActionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/ActionTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ActionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the ActionTopic FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-topic-ActionTopic-extension';
    }
    return inst;
  }
}
export default ActionTopic;
