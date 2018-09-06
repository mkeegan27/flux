import { setPropertiesFromJSON } from '../../json-helper';

import NotPerformedContext from '../context/NotPerformedContext';

/**
 * Generated class for cimi.procedure.ProcedureNotPerformedContext.
 * @extends NotPerformedContext
 */
class ProcedureNotPerformedContext extends NotPerformedContext {

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
   * @returns {ProcedureNotPerformedContext} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureNotPerformedContext class.
   * The JSON must be valid against the ProcedureNotPerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureNotPerformedContext} An instance of ProcedureNotPerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureNotPerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureNotPerformedContext class to a JSON object.
   * The JSON is expected to be valid against the ProcedureNotPerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/ProcedureNotPerformedContext' } };
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
   * Serializes an instance of the ProcedureNotPerformedContext class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedureNotPerformedContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ProcedureNotPerformedContext;
