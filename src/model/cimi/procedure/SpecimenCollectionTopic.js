import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureTopic from './ProcedureTopic';

/**
 * Generated class for cimi.procedure.SpecimenCollectionTopic.
 * @extends ProcedureTopic
 */
class SpecimenCollectionTopic extends ProcedureTopic {

  /**
   * Get the AmountOrSize array.
   * @returns {Array<AmountOrSize>} The cimi.procedure.AmountOrSize array
   */
  get amountOrSize() {
    return this._amountOrSize;
  }

  /**
   * Set the AmountOrSize array.
   * @param {Array<AmountOrSize>} amountOrSize - The cimi.procedure.AmountOrSize array
   */
  set amountOrSize(amountOrSize) {
    this._amountOrSize = amountOrSize;
  }

  /**
   * Set the AmountOrSize array and return 'this' for chaining.
   * @param {Array<AmountOrSize>} amountOrSize - The cimi.procedure.AmountOrSize array
   * @returns {SpecimenCollectionTopic} this.
   */
  withAmountOrSize(amountOrSize) {
    this.amountOrSize = amountOrSize; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionTopic class.
   * The JSON must be valid against the SpecimenCollectionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionTopic} An instance of SpecimenCollectionTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionTopic class to a JSON object.
   * The JSON is expected to be valid against the SpecimenCollectionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/SpecimenCollectionTopic' } };
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
    if (this.amountOrSize != null) {
      inst['AmountOrSize'] = this.amountOrSize.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenCollectionTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default SpecimenCollectionTopic;
