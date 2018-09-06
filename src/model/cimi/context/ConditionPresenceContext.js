import { setPropertiesFromJSON } from '../../json-helper';

import PresenceContext from './PresenceContext';

/**
 * Generated class for cimi.context.ConditionPresenceContext.
 * @extends PresenceContext
 */
class ConditionPresenceContext extends PresenceContext {

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The cimi.context.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   * @returns {ConditionPresenceContext} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the WhenClinicallyRecognized.
   * @returns {WhenClinicallyRecognized} The cimi.context.WhenClinicallyRecognized
   */
  get whenClinicallyRecognized() {
    return this._whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The cimi.context.WhenClinicallyRecognized
   */
  set whenClinicallyRecognized(whenClinicallyRecognized) {
    this._whenClinicallyRecognized = whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized and return 'this' for chaining.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The cimi.context.WhenClinicallyRecognized
   * @returns {ConditionPresenceContext} this.
   */
  withWhenClinicallyRecognized(whenClinicallyRecognized) {
    this.whenClinicallyRecognized = whenClinicallyRecognized; return this;
  }

  /**
   * Get the PresentOnAdmission.
   * @returns {PresentOnAdmission} The cimi.context.PresentOnAdmission
   */
  get presentOnAdmission() {
    return this._presentOnAdmission;
  }

  /**
   * Set the PresentOnAdmission.
   * @param {PresentOnAdmission} presentOnAdmission - The cimi.context.PresentOnAdmission
   */
  set presentOnAdmission(presentOnAdmission) {
    this._presentOnAdmission = presentOnAdmission;
  }

  /**
   * Set the PresentOnAdmission and return 'this' for chaining.
   * @param {PresentOnAdmission} presentOnAdmission - The cimi.context.PresentOnAdmission
   * @returns {ConditionPresenceContext} this.
   */
  withPresentOnAdmission(presentOnAdmission) {
    this.presentOnAdmission = presentOnAdmission; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The cimi.context.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The cimi.context.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The cimi.context.Severity
   * @returns {ConditionPresenceContext} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the Stage.
   * @returns {Stage} The cimi.context.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the Stage.
   * @param {Stage} stage - The cimi.context.Stage
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Set the Stage and return 'this' for chaining.
   * @param {Stage} stage - The cimi.context.Stage
   * @returns {ConditionPresenceContext} this.
   */
  withStage(stage) {
    this.stage = stage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionPresenceContext class.
   * The JSON must be valid against the ConditionPresenceContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionPresenceContext} An instance of ConditionPresenceContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConditionPresenceContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ConditionPresenceContext class to a JSON object.
   * The JSON is expected to be valid against the ConditionPresenceContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/ConditionPresenceContext' } };
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
    if (this.whenClinicallyRecognized != null) {
      inst['WhenClinicallyRecognized'] = typeof this.whenClinicallyRecognized.toJSON === 'function' ? this.whenClinicallyRecognized.toJSON() : this.whenClinicallyRecognized;
    }
    if (this.presentOnAdmission != null) {
      inst['PresentOnAdmission'] = typeof this.presentOnAdmission.toJSON === 'function' ? this.presentOnAdmission.toJSON() : this.presentOnAdmission;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.stage != null) {
      inst['Stage'] = typeof this.stage.toJSON === 'function' ? this.stage.toJSON() : this.stage;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ConditionPresenceContext class to a FHIR object.
   * The FHIR is expected to be valid against the ConditionPresenceContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default ConditionPresenceContext;
