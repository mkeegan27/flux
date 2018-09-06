import { setPropertiesFromJSON } from '../../json-helper';

import FindingTopic from './FindingTopic';

/**
 * Generated class for cimi.topic.ObservationTopic.
 * @extends FindingTopic
 */
class ObservationTopic extends FindingTopic {

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
   * @returns {ObservationTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   * @returns {ObservationTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the cimi.entity.Device reference.
   * @returns {Reference} The cimi.entity.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the cimi.entity.Device reference.
   * @param {Reference} device - The cimi.entity.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the cimi.entity.Device reference and return 'this' for chaining.
   * @param {Reference} device - The cimi.entity.Device reference
   * @returns {ObservationTopic} this.
   */
  withDevice(device) {
    this.device = device; return this;
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
   * @returns {ObservationTopic} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the Precondition array.
   * @returns {Array<Precondition>} The cimi.topic.Precondition array
   */
  get precondition() {
    return this._precondition;
  }

  /**
   * Set the Precondition array.
   * @param {Array<Precondition>} precondition - The cimi.topic.Precondition array
   */
  set precondition(precondition) {
    this._precondition = precondition;
  }

  /**
   * Set the Precondition array and return 'this' for chaining.
   * @param {Array<Precondition>} precondition - The cimi.topic.Precondition array
   * @returns {ObservationTopic} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The cimi.topic.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange array and return 'this' for chaining.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   * @returns {ObservationTopic} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Get the EvaluationComponent array.
   * @returns {Array<EvaluationComponent>} The cimi.topic.EvaluationComponent array
   */
  get evaluationComponent() {
    return this._evaluationComponent;
  }

  /**
   * Set the EvaluationComponent array.
   * @param {Array<EvaluationComponent>} evaluationComponent - The cimi.topic.EvaluationComponent array
   */
  set evaluationComponent(evaluationComponent) {
    this._evaluationComponent = evaluationComponent;
  }

  /**
   * Set the EvaluationComponent array and return 'this' for chaining.
   * @param {Array<EvaluationComponent>} evaluationComponent - The cimi.topic.EvaluationComponent array
   * @returns {ObservationTopic} this.
   */
  withEvaluationComponent(evaluationComponent) {
    this.evaluationComponent = evaluationComponent; return this;
  }

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The cimi.topic.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   * @returns {ObservationTopic} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ObservationTopic class.
   * The JSON must be valid against the ObservationTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ObservationTopic} An instance of ObservationTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ObservationTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ObservationTopic class to a JSON object.
   * The JSON is expected to be valid against the ObservationTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/ObservationTopic' } };
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
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.evaluationComponent != null) {
      inst['EvaluationComponent'] = this.evaluationComponent.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ObservationTopic class to a FHIR object.
   * The FHIR is expected to be valid against the ObservationTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ObservationTopic;
