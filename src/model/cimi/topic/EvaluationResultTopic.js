import { setPropertiesFromJSON } from '../../json-helper';

import FindingTopic from './FindingTopic';

/**
 * Generated class for cimi.topic.EvaluationResultTopic.
 * @extends FindingTopic
 */
class EvaluationResultTopic extends FindingTopic {

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
   * @returns {EvaluationResultTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the EvaluationMethod.
   * @returns {EvaluationMethod} The cimi.topic.EvaluationMethod
   */
  get evaluationMethod() {
    return this._evaluationMethod;
  }

  /**
   * Set the EvaluationMethod.
   * @param {EvaluationMethod} evaluationMethod - The cimi.topic.EvaluationMethod
   */
  set evaluationMethod(evaluationMethod) {
    this._evaluationMethod = evaluationMethod;
  }

  /**
   * Set the EvaluationMethod and return 'this' for chaining.
   * @param {EvaluationMethod} evaluationMethod - The cimi.topic.EvaluationMethod
   * @returns {EvaluationResultTopic} this.
   */
  withEvaluationMethod(evaluationMethod) {
    this.evaluationMethod = evaluationMethod; return this;
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
   * @returns {EvaluationResultTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the Focus.
   * @returns {Focus} The cimi.topic.Focus
   */
  get focus() {
    return this._focus;
  }

  /**
   * Set the Focus.
   * @param {Focus} focus - The cimi.topic.Focus
   */
  set focus(focus) {
    this._focus = focus;
  }

  /**
   * Set the Focus and return 'this' for chaining.
   * @param {Focus} focus - The cimi.topic.Focus
   * @returns {EvaluationResultTopic} this.
   */
  withFocus(focus) {
    this.focus = focus; return this;
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
   * @returns {EvaluationResultTopic} this.
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
   * @returns {EvaluationResultTopic} this.
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
   * @returns {EvaluationResultTopic} this.
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
   * @returns {EvaluationResultTopic} this.
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
   * @returns {EvaluationResultTopic} this.
   */
  withEvaluationComponent(evaluationComponent) {
    this.evaluationComponent = evaluationComponent; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EvaluationResultTopic class.
   * The JSON must be valid against the EvaluationResultTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EvaluationResultTopic} An instance of EvaluationResultTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EvaluationResultTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EvaluationResultTopic class to a JSON object.
   * The JSON is expected to be valid against the EvaluationResultTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/EvaluationResultTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.evaluationMethod != null) {
      inst['EvaluationMethod'] = typeof this.evaluationMethod.toJSON === 'function' ? this.evaluationMethod.toJSON() : this.evaluationMethod;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.focus != null) {
      inst['Focus'] = typeof this.focus.toJSON === 'function' ? this.focus.toJSON() : this.focus;
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
    return inst;
  }
}
export default EvaluationResultTopic;
