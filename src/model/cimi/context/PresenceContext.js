import { setPropertiesFromJSON } from '../../json-helper';

import AssertionContext from './AssertionContext';

/**
 * Generated class for cimi.context.PresenceContext.
 * @extends AssertionContext
 */
class PresenceContext extends AssertionContext {

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
   * @returns {PresenceContext} this.
   */
  withContextCode(contextCode) {
    this.contextCode = contextCode; return this;
  }

  /**
   * Get the VerificationStatus.
   * @returns {VerificationStatus} The cimi.context.VerificationStatus
   */
  get verificationStatus() {
    return this._verificationStatus;
  }

  /**
   * Set the VerificationStatus.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The cimi.context.VerificationStatus
   */
  set verificationStatus(verificationStatus) {
    this._verificationStatus = verificationStatus;
  }

  /**
   * Set the VerificationStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The cimi.context.VerificationStatus
   * @returns {PresenceContext} this.
   */
  withVerificationStatus(verificationStatus) {
    this.verificationStatus = verificationStatus; return this;
  }

  /**
   * Get the Onset.
   * @returns {Onset} The cimi.context.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The cimi.context.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The cimi.context.Onset
   * @returns {PresenceContext} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The cimi.context.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The cimi.context.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The cimi.context.Abatement
   * @returns {PresenceContext} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The cimi.context.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * @param {Certainty} certainty - The cimi.context.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Set the Certainty and return 'this' for chaining.
   * @param {Certainty} certainty - The cimi.context.Certainty
   * @returns {PresenceContext} this.
   */
  withCertainty(certainty) {
    this.certainty = certainty; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PresenceContext class.
   * The JSON must be valid against the PresenceContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PresenceContext} An instance of PresenceContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PresenceContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PresenceContext class to a JSON object.
   * The JSON is expected to be valid against the PresenceContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/PresenceContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.verificationStatus != null) {
      inst['VerificationStatus'] = typeof this.verificationStatus.toJSON === 'function' ? this.verificationStatus.toJSON() : this.verificationStatus;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PresenceContext class to a FHIR object.
   * The FHIR is expected to be valid against the PresenceContext FHIR profile, but no validation checks are performed.
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
      inst['extension'].push(this.verificationStatus.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.onset.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.abatement.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.certainty.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-PresenceContext-extension';
    }
    return inst;
  }
}
export default PresenceContext;
