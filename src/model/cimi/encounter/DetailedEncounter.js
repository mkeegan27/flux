import { setPropertiesFromJSON } from '../../json-helper';

import Encounter from './Encounter';

/**
 * Generated class for cimi.encounter.DetailedEncounter.
 * @extends Encounter
 */
class DetailedEncounter extends Encounter {

  /**
   * Deserializes JSON data to an instance of the DetailedEncounter class.
   * The JSON must be valid against the DetailedEncounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DetailedEncounter} An instance of DetailedEncounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DetailedEncounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DetailedEncounter class to a JSON object.
   * The JSON is expected to be valid against the DetailedEncounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/encounter/DetailedEncounter' } };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.encounterType != null) {
      inst['EncounterType'] = this.encounterType.map(f => f.toJSON());
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    return inst;
  }
  /**
   * Serializes an instance of the DetailedEncounter class to a FHIR object.
   * The FHIR is expected to be valid against the DetailedEncounter FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.encounterType != null) {
      inst['type'] = inst ['type'] || [];
      inst['type'].concat(this.encounterType.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    if (this.timePeriod != null) {
      inst['period'] = typeof this.timePeriod.toFHIR === 'function' ? this.timePeriod.toFHIR() : this.timePeriod;
    }
    return inst;
  }
}
export default DetailedEncounter;
