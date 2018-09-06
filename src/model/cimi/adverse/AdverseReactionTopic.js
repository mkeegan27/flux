import { setPropertiesFromJSON } from '../../json-helper';

import AssertionTopic from '../topic/AssertionTopic';

/**
 * Generated class for cimi.adverse.AdverseReactionTopic.
 * @extends AssertionTopic
 */
class AdverseReactionTopic extends AssertionTopic {

  /**
   * Get the Manifestation array.
   * @returns {Array<Manifestation>} The cimi.adverse.Manifestation array
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Set the Manifestation array.
   * @param {Array<Manifestation>} manifestation - The cimi.adverse.Manifestation array
   */
  set manifestation(manifestation) {
    this._manifestation = manifestation;
  }

  /**
   * Set the Manifestation array and return 'this' for chaining.
   * @param {Array<Manifestation>} manifestation - The cimi.adverse.Manifestation array
   * @returns {AdverseReactionTopic} this.
   */
  withManifestation(manifestation) {
    this.manifestation = manifestation; return this;
  }

  /**
   * Get the CausalAttribution array.
   * @returns {Array<CausalAttribution>} The cimi.adverse.CausalAttribution array
   */
  get causalAttribution() {
    return this._causalAttribution;
  }

  /**
   * Set the CausalAttribution array.
   * @param {Array<CausalAttribution>} causalAttribution - The cimi.adverse.CausalAttribution array
   */
  set causalAttribution(causalAttribution) {
    this._causalAttribution = causalAttribution;
  }

  /**
   * Set the CausalAttribution array and return 'this' for chaining.
   * @param {Array<CausalAttribution>} causalAttribution - The cimi.adverse.CausalAttribution array
   * @returns {AdverseReactionTopic} this.
   */
  withCausalAttribution(causalAttribution) {
    this.causalAttribution = causalAttribution; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseReactionTopic class.
   * The JSON must be valid against the AdverseReactionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseReactionTopic} An instance of AdverseReactionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseReactionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReactionTopic class to a JSON object.
   * The JSON is expected to be valid against the AdverseReactionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/AdverseReactionTopic' } };
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
    if (this.manifestation != null) {
      inst['Manifestation'] = this.manifestation.map(f => f.toJSON());
    }
    if (this.causalAttribution != null) {
      inst['CausalAttribution'] = this.causalAttribution.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReactionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseReactionTopic FHIR profile, but no validation checks are performed.
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
      inst['extension'].push(this.manifestation.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.causalAttribution.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-adverse-AdverseReactionTopic-extension';
    }
    return inst;
  }
}
export default AdverseReactionTopic;
