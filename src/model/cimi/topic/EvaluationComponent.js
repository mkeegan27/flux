import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.topic.EvaluationComponent.
 */
class EvaluationComponent {

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @returns {(Quantity|CodeableConcept|string|Range|Ratio|Media|time|dateTime|TimePeriod|IntegerQuantity)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * This field/value is required.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|Media|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity and return 'this' for chaining.
   * This field/value is required.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|Media|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Media, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   * @returns {EvaluationComponent} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The cimi.topic.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   * @returns {EvaluationComponent} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the ExceptionValue.
   * @returns {ExceptionValue} The cimi.context.ExceptionValue
   */
  get exceptionValue() {
    return this._exceptionValue;
  }

  /**
   * Set the ExceptionValue.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   */
  set exceptionValue(exceptionValue) {
    this._exceptionValue = exceptionValue;
  }

  /**
   * Set the ExceptionValue and return 'this' for chaining.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   * @returns {EvaluationComponent} this.
   */
  withExceptionValue(exceptionValue) {
    this.exceptionValue = exceptionValue; return this;
  }

  /**
   * Get the Interpretation.
   * @returns {Interpretation} The cimi.context.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Set the Interpretation.
   * @param {Interpretation} interpretation - The cimi.context.Interpretation
   */
  set interpretation(interpretation) {
    this._interpretation = interpretation;
  }

  /**
   * Set the Interpretation and return 'this' for chaining.
   * @param {Interpretation} interpretation - The cimi.context.Interpretation
   * @returns {EvaluationComponent} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
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
   * @returns {EvaluationComponent} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EvaluationComponent class.
   * The JSON must be valid against the EvaluationComponent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EvaluationComponent} An instance of EvaluationComponent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EvaluationComponent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EvaluationComponent class to a JSON object.
   * The JSON is expected to be valid against the EvaluationComponent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/EvaluationComponent' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the EvaluationComponent class to a FHIR object.
   * The FHIR is expected to be valid against the EvaluationComponent FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default EvaluationComponent;
