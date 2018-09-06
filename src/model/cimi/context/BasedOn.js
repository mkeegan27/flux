import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.BasedOn.
 */
class BasedOn {

  /**
   * Get the value (aliases requestedContext).
   * @returns {Reference} The cimi.context.RequestedContext reference
   */
  get value() {
    return this._requestedContext;
  }

  /**
   * Set the value (aliases requestedContext).
   * This field/value is required.
   * @param {Reference} value - The cimi.context.RequestedContext reference
   */
  set value(value) {
    this._requestedContext = value;
  }

  /**
   * Set the value (aliases requestedContext) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.context.RequestedContext reference
   * @returns {BasedOn} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.context.RequestedContext reference.
   * @returns {Reference} The cimi.context.RequestedContext reference
   */
  get requestedContext() {
    return this._requestedContext;
  }

  /**
   * Set the cimi.context.RequestedContext reference.
   * This field/value is required.
   * @param {Reference} requestedContext - The cimi.context.RequestedContext reference
   */
  set requestedContext(requestedContext) {
    this._requestedContext = requestedContext;
  }

  /**
   * Set the cimi.context.RequestedContext reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} requestedContext - The cimi.context.RequestedContext reference
   * @returns {BasedOn} this.
   */
  withRequestedContext(requestedContext) {
    this.requestedContext = requestedContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BasedOn class.
   * The JSON must be valid against the BasedOn JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BasedOn} An instance of BasedOn populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BasedOn();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BasedOn class to a JSON object.
   * The JSON is expected to be valid against the BasedOn JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/BasedOn' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default BasedOn;
