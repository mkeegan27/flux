import { setPropertiesFromJSON } from '../../json-helper';

import InformationEntry from '../core/InformationEntry';

/**
 * Generated class for cimi.adverse.AdverseEventEntry.
 * @extends InformationEntry
 */
class AdverseEventEntry extends InformationEntry {

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {AdverseEventEntry} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {AdverseEventEntry} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Get the Seriousness.
   * @returns {Seriousness} The cimi.adverse.Seriousness
   */
  get seriousness() {
    return this._seriousness;
  }

  /**
   * Set the Seriousness.
   * This field/value is required.
   * @param {Seriousness} seriousness - The cimi.adverse.Seriousness
   */
  set seriousness(seriousness) {
    this._seriousness = seriousness;
  }

  /**
   * Set the Seriousness and return 'this' for chaining.
   * This field/value is required.
   * @param {Seriousness} seriousness - The cimi.adverse.Seriousness
   * @returns {AdverseEventEntry} this.
   */
  withSeriousness(seriousness) {
    this.seriousness = seriousness; return this;
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
   * @returns {AdverseEventEntry} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {AdverseEventEntry} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the CausalAttribution array.
   * @returns {Array<CausalAttribution>} The cimi.adverse.CausalAttribution array
   */
  get causalAttribution() {
    return this._causalAttribution;
  }

  /**
   * Set the CausalAttribution array.
   * @param {Array<CausalAttribution>} causalAttribution - The cimi.adverse.CausalAttribution array
   */
  set causalAttribution(causalAttribution) {
    this._causalAttribution = causalAttribution;
  }

  /**
   * Set the CausalAttribution array and return 'this' for chaining.
   * @param {Array<CausalAttribution>} causalAttribution - The cimi.adverse.CausalAttribution array
   * @returns {AdverseEventEntry} this.
   */
  withCausalAttribution(causalAttribution) {
    this.causalAttribution = causalAttribution; return this;
  }

  /**
   * Get the ActionTaken array.
   * @returns {Array<ActionTaken>} The cimi.adverse.ActionTaken array
   */
  get actionTaken() {
    return this._actionTaken;
  }

  /**
   * Set the ActionTaken array.
   * @param {Array<ActionTaken>} actionTaken - The cimi.adverse.ActionTaken array
   */
  set actionTaken(actionTaken) {
    this._actionTaken = actionTaken;
  }

  /**
   * Set the ActionTaken array and return 'this' for chaining.
   * @param {Array<ActionTaken>} actionTaken - The cimi.adverse.ActionTaken array
   * @returns {AdverseEventEntry} this.
   */
  withActionTaken(actionTaken) {
    this.actionTaken = actionTaken; return this;
  }

  /**
   * Get the AssociatedStudy.
   * @returns {AssociatedStudy} The cimi.adverse.AssociatedStudy
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the AssociatedStudy.
   * @param {AssociatedStudy} associatedStudy - The cimi.adverse.AssociatedStudy
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Set the AssociatedStudy and return 'this' for chaining.
   * @param {AssociatedStudy} associatedStudy - The cimi.adverse.AssociatedStudy
   * @returns {AdverseEventEntry} this.
   */
  withAssociatedStudy(associatedStudy) {
    this.associatedStudy = associatedStudy; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEventEntry class.
   * The JSON must be valid against the AdverseEventEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEventEntry} An instance of AdverseEventEntry populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseEventEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseEventEntry class to a JSON object.
   * The JSON is expected to be valid against the AdverseEventEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/AdverseEventEntry' } };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.seriousness != null) {
      inst['Seriousness'] = typeof this.seriousness.toJSON === 'function' ? this.seriousness.toJSON() : this.seriousness;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.causalAttribution != null) {
      inst['CausalAttribution'] = this.causalAttribution.map(f => f.toJSON());
    }
    if (this.actionTaken != null) {
      inst['ActionTaken'] = this.actionTaken.map(f => f.toJSON());
    }
    if (this.associatedStudy != null) {
      inst['AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseEventEntry class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseEventEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.actionTaken != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actionTaken.toFHIR(true));
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    if (this.occurrenceTime != null) {
      inst['date'] = typeof this.occurrenceTime.toFHIR === 'function' ? this.occurrenceTime.toFHIR() : this.occurrenceTime;
    }
    if (this.seriousness != null) {
      inst['seriousness'] = typeof this.seriousness.toFHIR === 'function' ? this.seriousness.toFHIR() : this.seriousness;
    }
    if (this.outcome != null) {
      inst['outcome'] = typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR() : this.outcome;
    }
    if (this.details != null) {
      inst['description'] = typeof this.details.toFHIR === 'function' ? this.details.toFHIR() : this.details;
    }
    if (this.causalAttribution != null) {
      if(inst['suspectEntity'] === undefined) {
        inst['suspectEntity'] = {};
      }
      inst['suspectEntity']['instance'] = inst ['suspectEntity']['instance'] || [];
      inst['suspectEntity']['instance'].concat(this.causalAttribution.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.causalAttribution != null && this.causalAttribution.certainty != null) {
      if(inst['suspectEntity'] === undefined) {
        inst['suspectEntity'] = {};
      }
      inst['suspectEntity']['causalityAssessment'] = inst ['suspectEntity']['causalityAssessment'] || [];
      inst['suspectEntity']['causalityAssessment'].concat(this.causalAttribution.certainty.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.associatedStudy != null) {
      inst['study'] = typeof this.associatedStudy.toFHIR === 'function' ? this.associatedStudy.toFHIR() : this.associatedStudy;
    }
    return inst;
  }
}
export default AdverseEventEntry;
