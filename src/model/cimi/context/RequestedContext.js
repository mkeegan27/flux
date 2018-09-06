import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for cimi.context.RequestedContext.
 * @extends ActionContext
 */
class RequestedContext extends ActionContext {

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
   * @returns {RequestedContext} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the RequestIntent.
   * @returns {RequestIntent} The cimi.context.RequestIntent
   */
  get requestIntent() {
    return this._requestIntent;
  }

  /**
   * Set the RequestIntent.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The cimi.context.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Set the RequestIntent and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The cimi.context.RequestIntent
   * @returns {RequestedContext} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The cimi.context.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The cimi.context.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The cimi.context.ExpectedPerformanceTime
   * @returns {RequestedContext} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
  }

  /**
   * Get the ExpectedPerformerType.
   * @returns {ExpectedPerformerType} The cimi.context.ExpectedPerformerType
   */
  get expectedPerformerType() {
    return this._expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType.
   * @param {ExpectedPerformerType} expectedPerformerType - The cimi.context.ExpectedPerformerType
   */
  set expectedPerformerType(expectedPerformerType) {
    this._expectedPerformerType = expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType and return 'this' for chaining.
   * @param {ExpectedPerformerType} expectedPerformerType - The cimi.context.ExpectedPerformerType
   * @returns {RequestedContext} this.
   */
  withExpectedPerformerType(expectedPerformerType) {
    this.expectedPerformerType = expectedPerformerType; return this;
  }

  /**
   * Get the ExpectedPerformer.
   * @returns {ExpectedPerformer} The cimi.context.ExpectedPerformer
   */
  get expectedPerformer() {
    return this._expectedPerformer;
  }

  /**
   * Set the ExpectedPerformer.
   * @param {ExpectedPerformer} expectedPerformer - The cimi.context.ExpectedPerformer
   */
  set expectedPerformer(expectedPerformer) {
    this._expectedPerformer = expectedPerformer;
  }

  /**
   * Set the ExpectedPerformer and return 'this' for chaining.
   * @param {ExpectedPerformer} expectedPerformer - The cimi.context.ExpectedPerformer
   * @returns {RequestedContext} this.
   */
  withExpectedPerformer(expectedPerformer) {
    this.expectedPerformer = expectedPerformer; return this;
  }

  /**
   * Get the ExpectedMethod.
   * @returns {ExpectedMethod} The cimi.context.ExpectedMethod
   */
  get expectedMethod() {
    return this._expectedMethod;
  }

  /**
   * Set the ExpectedMethod.
   * @param {ExpectedMethod} expectedMethod - The cimi.context.ExpectedMethod
   */
  set expectedMethod(expectedMethod) {
    this._expectedMethod = expectedMethod;
  }

  /**
   * Set the ExpectedMethod and return 'this' for chaining.
   * @param {ExpectedMethod} expectedMethod - The cimi.context.ExpectedMethod
   * @returns {RequestedContext} this.
   */
  withExpectedMethod(expectedMethod) {
    this.expectedMethod = expectedMethod; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {RequestedContext} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
  }

  /**
   * Get the PerformerInstructions.
   * @returns {PerformerInstructions} The cimi.context.PerformerInstructions
   */
  get performerInstructions() {
    return this._performerInstructions;
  }

  /**
   * Set the PerformerInstructions.
   * @param {PerformerInstructions} performerInstructions - The cimi.context.PerformerInstructions
   */
  set performerInstructions(performerInstructions) {
    this._performerInstructions = performerInstructions;
  }

  /**
   * Set the PerformerInstructions and return 'this' for chaining.
   * @param {PerformerInstructions} performerInstructions - The cimi.context.PerformerInstructions
   * @returns {RequestedContext} this.
   */
  withPerformerInstructions(performerInstructions) {
    this.performerInstructions = performerInstructions; return this;
  }

  /**
   * Get the PatientInstructions.
   * @returns {PatientInstructions} The cimi.context.PatientInstructions
   */
  get patientInstructions() {
    return this._patientInstructions;
  }

  /**
   * Set the PatientInstructions.
   * @param {PatientInstructions} patientInstructions - The cimi.context.PatientInstructions
   */
  set patientInstructions(patientInstructions) {
    this._patientInstructions = patientInstructions;
  }

  /**
   * Set the PatientInstructions and return 'this' for chaining.
   * @param {PatientInstructions} patientInstructions - The cimi.context.PatientInstructions
   * @returns {RequestedContext} this.
   */
  withPatientInstructions(patientInstructions) {
    this.patientInstructions = patientInstructions; return this;
  }

  /**
   * Get the CommunicationMethod.
   * @returns {CommunicationMethod} The cimi.context.CommunicationMethod
   */
  get communicationMethod() {
    return this._communicationMethod;
  }

  /**
   * Set the CommunicationMethod.
   * @param {CommunicationMethod} communicationMethod - The cimi.context.CommunicationMethod
   */
  set communicationMethod(communicationMethod) {
    this._communicationMethod = communicationMethod;
  }

  /**
   * Set the CommunicationMethod and return 'this' for chaining.
   * @param {CommunicationMethod} communicationMethod - The cimi.context.CommunicationMethod
   * @returns {RequestedContext} this.
   */
  withCommunicationMethod(communicationMethod) {
    this.communicationMethod = communicationMethod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RequestedContext class.
   * The JSON must be valid against the RequestedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestedContext} An instance of RequestedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RequestedContext class to a JSON object.
   * The JSON is expected to be valid against the RequestedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/RequestedContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.requestIntent != null) {
      inst['RequestIntent'] = typeof this.requestIntent.toJSON === 'function' ? this.requestIntent.toJSON() : this.requestIntent;
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = typeof this.expectedPerformanceTime.toJSON === 'function' ? this.expectedPerformanceTime.toJSON() : this.expectedPerformanceTime;
    }
    if (this.expectedPerformerType != null) {
      inst['ExpectedPerformerType'] = typeof this.expectedPerformerType.toJSON === 'function' ? this.expectedPerformerType.toJSON() : this.expectedPerformerType;
    }
    if (this.expectedPerformer != null) {
      inst['ExpectedPerformer'] = typeof this.expectedPerformer.toJSON === 'function' ? this.expectedPerformer.toJSON() : this.expectedPerformer;
    }
    if (this.expectedMethod != null) {
      inst['ExpectedMethod'] = typeof this.expectedMethod.toJSON === 'function' ? this.expectedMethod.toJSON() : this.expectedMethod;
    }
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
    }
    if (this.performerInstructions != null) {
      inst['PerformerInstructions'] = typeof this.performerInstructions.toJSON === 'function' ? this.performerInstructions.toJSON() : this.performerInstructions;
    }
    if (this.patientInstructions != null) {
      inst['PatientInstructions'] = typeof this.patientInstructions.toJSON === 'function' ? this.patientInstructions.toJSON() : this.patientInstructions;
    }
    if (this.communicationMethod != null) {
      inst['CommunicationMethod'] = typeof this.communicationMethod.toJSON === 'function' ? this.communicationMethod.toJSON() : this.communicationMethod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the RequestedContext class to a FHIR object.
   * The FHIR is expected to be valid against the RequestedContext FHIR profile, but no validation checks are performed.
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
      inst['extension'].push(this.status.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.requestIntent.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expectedPerformanceTime.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expectedPerformerType.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expectedPerformer.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expectedMethod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.priorityRank.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.performerInstructions.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.patientInstructions.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.communicationMethod.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-RequestedContext-extension';
    }
    return inst;
  }
}
export default RequestedContext;
