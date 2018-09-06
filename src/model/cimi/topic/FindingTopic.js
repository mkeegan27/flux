import { setPropertiesFromJSON } from '../../json-helper';

import StatementTopic from './StatementTopic';

/**
 * Generated class for cimi.topic.FindingTopic.
 * @extends StatementTopic
 */
class FindingTopic extends StatementTopic {

  /**
   * Get the FindingMethod.
   * @returns {FindingMethod} The cimi.topic.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The cimi.topic.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The cimi.topic.FindingMethod
   * @returns {FindingTopic} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {FindingTopic} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the Media array.
   * @returns {Array<Media>} The shr.core.Media array
   */
  get media() {
    return this._media;
  }

  /**
   * Set the Media array.
   * @param {Array<Media>} media - The shr.core.Media array
   */
  set media(media) {
    this._media = media;
  }

  /**
   * Set the Media array and return 'this' for chaining.
   * @param {Array<Media>} media - The shr.core.Media array
   * @returns {FindingTopic} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FindingTopic class.
   * The JSON must be valid against the FindingTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingTopic} An instance of FindingTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FindingTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingTopic class to a JSON object.
   * The JSON is expected to be valid against the FindingTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/FindingTopic' } };
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
   * Serializes an instance of the FindingTopic class to a FHIR object.
   * The FHIR is expected to be valid against the FindingTopic FHIR profile, but no validation checks are performed.
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
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-topic-FindingTopic-extension';
    }
    return inst;
  }
}
export default FindingTopic;
