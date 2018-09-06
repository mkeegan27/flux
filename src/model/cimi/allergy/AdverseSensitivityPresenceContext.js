import { setPropertiesFromJSON } from '../../json-helper';

import PresenceContext from '../context/PresenceContext';

/**
 * Generated class for cimi.allergy.AdverseSensitivityPresenceContext.
 * @extends PresenceContext
 */
class AdverseSensitivityPresenceContext extends PresenceContext {

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
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withVerificationStatus(verificationStatus) {
    this.verificationStatus = verificationStatus; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The cimi.context.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The cimi.context.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The cimi.context.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The cimi.context.Criticality
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the MostRecentOccurrenceTime.
   * @returns {MostRecentOccurrenceTime} The cimi.allergy.MostRecentOccurrenceTime
   */
  get mostRecentOccurrenceTime() {
    return this._mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The cimi.allergy.MostRecentOccurrenceTime
   */
  set mostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this._mostRecentOccurrenceTime = mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime and return 'this' for chaining.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The cimi.allergy.MostRecentOccurrenceTime
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withMostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this.mostRecentOccurrenceTime = mostRecentOccurrenceTime; return this;
  }

  /**
   * Get the cimi.adverse.AdverseReactionPresenceStatement reference array.
   * @returns {Array<Reference>} The cimi.adverse.AdverseReactionPresenceStatement reference array
   */
  get adverseReactionPresenceStatement() {
    return this._adverseReactionPresenceStatement;
  }

  /**
   * Set the cimi.adverse.AdverseReactionPresenceStatement reference array.
   * @param {Array<Reference>} adverseReactionPresenceStatement - The cimi.adverse.AdverseReactionPresenceStatement reference array
   */
  set adverseReactionPresenceStatement(adverseReactionPresenceStatement) {
    this._adverseReactionPresenceStatement = adverseReactionPresenceStatement;
  }

  /**
   * Set the cimi.adverse.AdverseReactionPresenceStatement reference array and return 'this' for chaining.
   * @param {Array<Reference>} adverseReactionPresenceStatement - The cimi.adverse.AdverseReactionPresenceStatement reference array
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withAdverseReactionPresenceStatement(adverseReactionPresenceStatement) {
    this.adverseReactionPresenceStatement = adverseReactionPresenceStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseSensitivityPresenceContext class.
   * The JSON must be valid against the AdverseSensitivityPresenceContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseSensitivityPresenceContext} An instance of AdverseSensitivityPresenceContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseSensitivityPresenceContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseSensitivityPresenceContext class to a JSON object.
   * The JSON is expected to be valid against the AdverseSensitivityPresenceContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/allergy/AdverseSensitivityPresenceContext' } };
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
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['MostRecentOccurrenceTime'] = typeof this.mostRecentOccurrenceTime.toJSON === 'function' ? this.mostRecentOccurrenceTime.toJSON() : this.mostRecentOccurrenceTime;
    }
    if (this.adverseReactionPresenceStatement != null) {
      inst['AdverseReactionPresenceStatement'] = this.adverseReactionPresenceStatement.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseSensitivityPresenceContext class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseSensitivityPresenceContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default AdverseSensitivityPresenceContext;
