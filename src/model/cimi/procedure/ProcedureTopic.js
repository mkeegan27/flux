import { setPropertiesFromJSON } from '../../json-helper';

import ActionTopic from '../topic/ActionTopic';

/**
 * Generated class for cimi.procedure.ProcedureTopic.
 * @extends ActionTopic
 */
class ProcedureTopic extends ActionTopic {

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
   * @returns {ProcedureTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
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
   * @returns {ProcedureTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The cimi.element.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The cimi.element.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The cimi.element.PartOf
   * @returns {ProcedureTopic} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The cimi.element.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The cimi.element.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The cimi.element.Annotation array
   * @returns {ProcedureTopic} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the Reason.
   * @returns {Reason} The cimi.context.Reason
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason.
   * @param {Reason} reason - The cimi.context.Reason
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason and return 'this' for chaining.
   * @param {Reason} reason - The cimi.context.Reason
   * @returns {ProcedureTopic} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the Method.
   * @returns {Method} The cimi.context.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Set the Method.
   * @param {Method} method - The cimi.context.Method
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Set the Method and return 'this' for chaining.
   * @param {Method} method - The cimi.context.Method
   * @returns {ProcedureTopic} this.
   */
  withMethod(method) {
    this.method = method; return this;
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
   * @returns {ProcedureTopic} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Get the InputFinding array.
   * @returns {Array<InputFinding>} The cimi.procedure.InputFinding array
   */
  get inputFinding() {
    return this._inputFinding;
  }

  /**
   * Set the InputFinding array.
   * @param {Array<InputFinding>} inputFinding - The cimi.procedure.InputFinding array
   */
  set inputFinding(inputFinding) {
    this._inputFinding = inputFinding;
  }

  /**
   * Set the InputFinding array and return 'this' for chaining.
   * @param {Array<InputFinding>} inputFinding - The cimi.procedure.InputFinding array
   * @returns {ProcedureTopic} this.
   */
  withInputFinding(inputFinding) {
    this.inputFinding = inputFinding; return this;
  }

  /**
   * Get the Indication array.
   * @returns {Array<Indication>} The cimi.procedure.Indication array
   */
  get indication() {
    return this._indication;
  }

  /**
   * Set the Indication array.
   * @param {Array<Indication>} indication - The cimi.procedure.Indication array
   */
  set indication(indication) {
    this._indication = indication;
  }

  /**
   * Set the Indication array and return 'this' for chaining.
   * @param {Array<Indication>} indication - The cimi.procedure.Indication array
   * @returns {ProcedureTopic} this.
   */
  withIndication(indication) {
    this.indication = indication; return this;
  }

  /**
   * Get the cimi.entity.Device reference array.
   * @returns {Array<Reference>} The cimi.entity.Device reference array
   */
  get device() {
    return this._device;
  }

  /**
   * Set the cimi.entity.Device reference array.
   * @param {Array<Reference>} device - The cimi.entity.Device reference array
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the cimi.entity.Device reference array and return 'this' for chaining.
   * @param {Array<Reference>} device - The cimi.entity.Device reference array
   * @returns {ProcedureTopic} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the Location.
   * @returns {Location} The cimi.entity.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * @param {Location} location - The cimi.entity.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the Location and return 'this' for chaining.
   * @param {Location} location - The cimi.entity.Location
   * @returns {ProcedureTopic} this.
   */
  withLocation(location) {
    this.location = location; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureTopic class.
   * The JSON must be valid against the ProcedureTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureTopic} An instance of ProcedureTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureTopic class to a JSON object.
   * The JSON is expected to be valid against the ProcedureTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/ProcedureTopic' } };
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
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureTopic class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedureTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ProcedureTopic;
