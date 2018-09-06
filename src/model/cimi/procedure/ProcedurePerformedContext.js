import { setPropertiesFromJSON } from '../../json-helper';

import PerformedContext from '../context/PerformedContext';

/**
 * Generated class for cimi.procedure.ProcedurePerformedContext.
 * @extends PerformedContext
 */
class ProcedurePerformedContext extends PerformedContext {

  /**
   * Get the FHIRProcedureParticipant array.
   * @returns {Array<FHIRProcedureParticipant>} The cimi.procedure.FHIRProcedureParticipant array
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the FHIRProcedureParticipant array.
   * @param {Array<FHIRProcedureParticipant>} participant - The cimi.procedure.FHIRProcedureParticipant array
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Set the FHIRProcedureParticipant array and return 'this' for chaining.
   * @param {Array<FHIRProcedureParticipant>} participant - The cimi.procedure.FHIRProcedureParticipant array
   * @returns {ProcedurePerformedContext} this.
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
   * @returns {ProcedurePerformedContext} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * @returns {ProcedurePerformedContext} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the OutputFinding array.
   * @returns {Array<OutputFinding>} The cimi.procedure.OutputFinding array
   */
  get outputFinding() {
    return this._outputFinding;
  }

  /**
   * Set the OutputFinding array.
   * @param {Array<OutputFinding>} outputFinding - The cimi.procedure.OutputFinding array
   */
  set outputFinding(outputFinding) {
    this._outputFinding = outputFinding;
  }

  /**
   * Set the OutputFinding array and return 'this' for chaining.
   * @param {Array<OutputFinding>} outputFinding - The cimi.procedure.OutputFinding array
   * @returns {ProcedurePerformedContext} this.
   */
  withOutputFinding(outputFinding) {
    this.outputFinding = outputFinding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedurePerformedContext class.
   * The JSON must be valid against the ProcedurePerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedurePerformedContext} An instance of ProcedurePerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedurePerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedurePerformedContext class to a JSON object.
   * The JSON is expected to be valid against the ProcedurePerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/ProcedurePerformedContext' } };
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
    if (this.outputFinding != null) {
      inst['OutputFinding'] = this.outputFinding.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ProcedurePerformedContext class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedurePerformedContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ProcedurePerformedContext;
