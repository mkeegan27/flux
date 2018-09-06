import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for cimi.context.NotPerformedContext.
 * @extends ActionContext
 */
class NotPerformedContext extends ActionContext {

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The cimi.context.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The cimi.context.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The cimi.context.RelatedRequest
   * @returns {NotPerformedContext} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the NonOccurrenceTimeOrPeriod.
   * @returns {NonOccurrenceTimeOrPeriod} The shr.core.NonOccurrenceTimeOrPeriod
   */
  get nonOccurrenceTimeOrPeriod() {
    return this._nonOccurrenceTimeOrPeriod;
  }

  /**
   * Set the NonOccurrenceTimeOrPeriod.
   * This field/value is required.
   * @param {NonOccurrenceTimeOrPeriod} nonOccurrenceTimeOrPeriod - The shr.core.NonOccurrenceTimeOrPeriod
   */
  set nonOccurrenceTimeOrPeriod(nonOccurrenceTimeOrPeriod) {
    this._nonOccurrenceTimeOrPeriod = nonOccurrenceTimeOrPeriod;
  }

  /**
   * Set the NonOccurrenceTimeOrPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {NonOccurrenceTimeOrPeriod} nonOccurrenceTimeOrPeriod - The shr.core.NonOccurrenceTimeOrPeriod
   * @returns {NotPerformedContext} this.
   */
  withNonOccurrenceTimeOrPeriod(nonOccurrenceTimeOrPeriod) {
    this.nonOccurrenceTimeOrPeriod = nonOccurrenceTimeOrPeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NotPerformedContext class.
   * The JSON must be valid against the NotPerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NotPerformedContext} An instance of NotPerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NotPerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NotPerformedContext class to a JSON object.
   * The JSON is expected to be valid against the NotPerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/NotPerformedContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['NonOccurrenceTimeOrPeriod'] = typeof this.nonOccurrenceTimeOrPeriod.toJSON === 'function' ? this.nonOccurrenceTimeOrPeriod.toJSON() : this.nonOccurrenceTimeOrPeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the NotPerformedContext class to a FHIR object.
   * The FHIR is expected to be valid against the NotPerformedContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.contextCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.encounter.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.reason.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedRequest.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.nonOccurrenceTimeOrPeriod.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-NotPerformedContext-extension';
    }
    return inst;
  }
}
export default NotPerformedContext;
