import { setPropertiesFromJSON } from '../../json-helper';

import AdverseEventEntry from './AdverseEventEntry';

/**
 * Generated class for cimi.adverse.ToxicEventEntry.
 * @extends AdverseEventEntry
 */
class ToxicEventEntry extends AdverseEventEntry {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {ToxicEventEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {ToxicEventEntry} this.
   */
  withSeriousness(seriousness) {
    this.seriousness = seriousness; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ToxicEventEntry class.
   * The JSON must be valid against the ToxicEventEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ToxicEventEntry} An instance of ToxicEventEntry populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ToxicEventEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ToxicEventEntry class to a JSON object.
   * The JSON is expected to be valid against the ToxicEventEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/ToxicEventEntry' };
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
   * Serializes an instance of the ToxicEventEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ToxicEventEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'AdverseEvent';
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
export default ToxicEventEntry;
