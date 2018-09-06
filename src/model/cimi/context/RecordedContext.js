import { setPropertiesFromJSON } from '../../json-helper';

import FindingContext from './FindingContext';

/**
 * Generated class for cimi.context.RecordedContext.
 * @extends FindingContext
 */
class RecordedContext extends FindingContext {

  /**
   * Get the ContextCode.
   * @returns {ContextCode} The cimi.context.ContextCode
   */
  get contextCode() {
    return this._contextCode;
  }

  /**
   * Set the ContextCode.
   * This field/value is required.
   * @param {ContextCode} contextCode - The cimi.context.ContextCode
   */
  set contextCode(contextCode) {
    this._contextCode = contextCode;
  }

  /**
   * Set the ContextCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ContextCode} contextCode - The cimi.context.ContextCode
   * @returns {RecordedContext} this.
   */
  withContextCode(contextCode) {
    this.contextCode = contextCode; return this;
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
   * @returns {RecordedContext} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
  }

  /**
   * Get the FindingStatus.
   * @returns {FindingStatus} The cimi.context.FindingStatus
   */
  get findingStatus() {
    return this._findingStatus;
  }

  /**
   * Set the FindingStatus.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The cimi.context.FindingStatus
   */
  set findingStatus(findingStatus) {
    this._findingStatus = findingStatus;
  }

  /**
   * Set the FindingStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The cimi.context.FindingStatus
   * @returns {RecordedContext} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
  }

  /**
   * Get the RelevantTime.
   * @returns {RelevantTime} The cimi.context.RelevantTime
   */
  get relevantTime() {
    return this._relevantTime;
  }

  /**
   * Set the RelevantTime.
   * @param {RelevantTime} relevantTime - The cimi.context.RelevantTime
   */
  set relevantTime(relevantTime) {
    this._relevantTime = relevantTime;
  }

  /**
   * Set the RelevantTime and return 'this' for chaining.
   * @param {RelevantTime} relevantTime - The cimi.context.RelevantTime
   * @returns {RecordedContext} this.
   */
  withRelevantTime(relevantTime) {
    this.relevantTime = relevantTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecordedContext class.
   * The JSON must be valid against the RecordedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecordedContext} An instance of RecordedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecordedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RecordedContext class to a JSON object.
   * The JSON is expected to be valid against the RecordedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/RecordedContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    return inst;
  }
  /**
   * Serializes an instance of the RecordedContext class to a FHIR object.
   * The FHIR is expected to be valid against the RecordedContext FHIR profile, but no validation checks are performed.
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
      inst['extension'].push(this.interpretation.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingStatus.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relevantTime.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-RecordedContext-extension';
    }
    return inst;
  }
}
export default RecordedContext;
