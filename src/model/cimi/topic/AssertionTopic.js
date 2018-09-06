import { setPropertiesFromJSON } from '../../json-helper';

import FindingTopic from './FindingTopic';

/**
 * Generated class for cimi.topic.AssertionTopic.
 * @extends FindingTopic
 */
class AssertionTopic extends FindingTopic {

  /**
   * Deserializes JSON data to an instance of the AssertionTopic class.
   * The JSON must be valid against the AssertionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssertionTopic} An instance of AssertionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssertionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AssertionTopic class to a JSON object.
   * The JSON is expected to be valid against the AssertionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/AssertionTopic' } };
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
    return inst;
  }
  /**
   * Serializes an instance of the AssertionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the AssertionTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default AssertionTopic;
