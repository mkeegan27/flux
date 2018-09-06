import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for cimi.context.PerformedContext.
 * @extends ActionContext
 */
class PerformedContext extends ActionContext {

  /**
   * Get the OccurrenceTimeOrPeriod.
   * @returns {OccurrenceTimeOrPeriod} The shr.core.OccurrenceTimeOrPeriod
   */
  get occurrenceTimeOrPeriod() {
    return this._occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod.
   * This field/value is required.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   */
  set occurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this._occurrenceTimeOrPeriod = occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   * @returns {PerformedContext} this.
   */
  withOccurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this.occurrenceTimeOrPeriod = occurrenceTimeOrPeriod; return this;
  }

  /**
   * Get the Participant array.
   * @returns {Array<Participant>} The cimi.context.Participant array
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the Participant array.
   * @param {Array<Participant>} participant - The cimi.context.Participant array
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Set the Participant array and return 'this' for chaining.
   * @param {Array<Participant>} participant - The cimi.context.Participant array
   * @returns {PerformedContext} this.
   */
  withParticipant(participant) {
    this.participant = participant; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The cimi.element.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The cimi.element.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The cimi.element.Status
   * @returns {PerformedContext} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * @returns {PerformedContext} this.
   */
  withMethod(method) {
    this.method = method; return this;
  }

  /**
   * Get the RelatedRequest array.
   * @returns {Array<RelatedRequest>} The cimi.context.RelatedRequest array
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest array.
   * @param {Array<RelatedRequest>} relatedRequest - The cimi.context.RelatedRequest array
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest array and return 'this' for chaining.
   * @param {Array<RelatedRequest>} relatedRequest - The cimi.context.RelatedRequest array
   * @returns {PerformedContext} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the cimi.entity.Facility reference.
   * @returns {Reference} The cimi.entity.Facility reference
   */
  get facility() {
    return this._facility;
  }

  /**
   * Set the cimi.entity.Facility reference.
   * @param {Reference} facility - The cimi.entity.Facility reference
   */
  set facility(facility) {
    this._facility = facility;
  }

  /**
   * Set the cimi.entity.Facility reference and return 'this' for chaining.
   * @param {Reference} facility - The cimi.entity.Facility reference
   * @returns {PerformedContext} this.
   */
  withFacility(facility) {
    this.facility = facility; return this;
  }

  /**
   * Get the Outcome.
   * @returns {Outcome} The cimi.context.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The cimi.context.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The cimi.context.Outcome
   * @returns {PerformedContext} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PerformedContext class.
   * The JSON must be valid against the PerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PerformedContext} An instance of PerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PerformedContext class to a JSON object.
   * The JSON is expected to be valid against the PerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/PerformedContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participant != null) {
      inst['Participant'] = this.participant.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PerformedContext class to a FHIR object.
   * The FHIR is expected to be valid against the PerformedContext FHIR profile, but no validation checks are performed.
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
      inst['extension'].push(this.occurrenceTimeOrPeriod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.participant.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.status.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.method.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedRequest.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.facility.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.outcome.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-PerformedContext-extension';
    }
    return inst;
  }
}
export default PerformedContext;
