import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.BaseElement.
 */
class BaseElement {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {BaseElement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codedElement).
   * @returns {CodedElement} The shr.test.CodedElement
   */
  get value() {
    return this._codedElement;
  }

  /**
   * Set the value (aliases codedElement).
   * This field/value is required.
   * @param {CodedElement} value - The shr.test.CodedElement
   */
  set value(value) {
    this._codedElement = value;
  }

  /**
   * Set the value (aliases codedElement) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodedElement} value - The shr.test.CodedElement
   * @returns {BaseElement} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodedElement.
   * @returns {CodedElement} The shr.test.CodedElement
   */
  get codedElement() {
    return this._codedElement;
  }

  /**
   * Set the CodedElement.
   * This field/value is required.
   * @param {CodedElement} codedElement - The shr.test.CodedElement
   */
  set codedElement(codedElement) {
    this._codedElement = codedElement;
  }

  /**
   * Set the CodedElement and return 'this' for chaining.
   * This field/value is required.
   * @param {CodedElement} codedElement - The shr.test.CodedElement
   * @returns {BaseElement} this.
   */
  withCodedElement(codedElement) {
    this.codedElement = codedElement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BaseElement class.
   * The JSON must be valid against the BaseElement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BaseElement} An instance of BaseElement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BaseElement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BaseElement class to a JSON object.
   * The JSON is expected to be valid against the BaseElement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/BaseElement' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BaseElement class to a FHIR object.
   * The FHIR is expected to be valid against the BaseElement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default BaseElement;
