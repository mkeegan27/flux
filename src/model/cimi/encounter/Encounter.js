import { setPropertiesFromJSON } from '../../json-helper';

import InformationEntry from '../core/InformationEntry';

/**
 * Generated class for cimi.encounter.Encounter.
 * @extends InformationEntry
 */
class Encounter extends InformationEntry {

  /**
   * Get the EncounterType array.
   * @returns {Array<EncounterType>} The cimi.encounter.EncounterType array
   */
  get encounterType() {
    return this._encounterType;
  }

  /**
   * Set the EncounterType array.
   * @param {Array<EncounterType>} encounterType - The cimi.encounter.EncounterType array
   */
  set encounterType(encounterType) {
    this._encounterType = encounterType;
  }

  /**
   * Set the EncounterType array and return 'this' for chaining.
   * @param {Array<EncounterType>} encounterType - The cimi.encounter.EncounterType array
   * @returns {Encounter} this.
   */
  withEncounterType(encounterType) {
    this.encounterType = encounterType; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {Encounter} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
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
   * @returns {Encounter} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Encounter class.
   * The JSON must be valid against the Encounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Encounter} An instance of Encounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Encounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Encounter class to a JSON object.
   * The JSON is expected to be valid against the Encounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/encounter/Encounter' } };
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
   * Serializes an instance of the Encounter class to a FHIR object.
   * The FHIR is expected to be valid against the Encounter FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-encounter-Encounter-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Encounter;
