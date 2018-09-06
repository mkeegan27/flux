import { setPropertiesFromJSON } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for cimi.entity.Practitioner.
 * @extends Role
 */
class Practitioner extends Role {

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
   * @returns {Practitioner} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the cimi.entity.Person reference.
   * @returns {Reference} The cimi.entity.Person reference
   */
  get person() {
    return this._person;
  }

  /**
   * Set the cimi.entity.Person reference.
   * This field/value is required.
   * @param {Reference} person - The cimi.entity.Person reference
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the cimi.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} person - The cimi.entity.Person reference
   * @returns {Practitioner} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Get the NationalProviderIdentifier.
   * @returns {NationalProviderIdentifier} The cimi.entity.NationalProviderIdentifier
   */
  get nationalProviderIdentifier() {
    return this._nationalProviderIdentifier;
  }

  /**
   * Set the NationalProviderIdentifier.
   * This field/value is required.
   * @param {NationalProviderIdentifier} nationalProviderIdentifier - The cimi.entity.NationalProviderIdentifier
   */
  set nationalProviderIdentifier(nationalProviderIdentifier) {
    this._nationalProviderIdentifier = nationalProviderIdentifier;
  }

  /**
   * Set the NationalProviderIdentifier and return 'this' for chaining.
   * This field/value is required.
   * @param {NationalProviderIdentifier} nationalProviderIdentifier - The cimi.entity.NationalProviderIdentifier
   * @returns {Practitioner} this.
   */
  withNationalProviderIdentifier(nationalProviderIdentifier) {
    this.nationalProviderIdentifier = nationalProviderIdentifier; return this;
  }

  /**
   * Get the Qualification array.
   * @returns {Array<Qualification>} The cimi.entity.Qualification array
   */
  get qualification() {
    return this._qualification;
  }

  /**
   * Set the Qualification array.
   * @param {Array<Qualification>} qualification - The cimi.entity.Qualification array
   */
  set qualification(qualification) {
    this._qualification = qualification;
  }

  /**
   * Set the Qualification array and return 'this' for chaining.
   * @param {Array<Qualification>} qualification - The cimi.entity.Qualification array
   * @returns {Practitioner} this.
   */
  withQualification(qualification) {
    this.qualification = qualification; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Practitioner class.
   * The JSON must be valid against the Practitioner JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Practitioner} An instance of Practitioner populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Practitioner();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Practitioner class to a JSON object.
   * The JSON is expected to be valid against the Practitioner JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Practitioner' };
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    if (this.nationalProviderIdentifier != null) {
      inst['NationalProviderIdentifier'] = typeof this.nationalProviderIdentifier.toJSON === 'function' ? this.nationalProviderIdentifier.toJSON() : this.nationalProviderIdentifier;
    }
    if (this.qualification != null) {
      inst['Qualification'] = this.qualification.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Practitioner class to a FHIR object.
   * The FHIR is expected to be valid against the Practitioner FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Practitioner';
    if (this.nationalProviderIdentifier != null) {
      inst['identifier'] = inst ['identifier'] || [];
      inst['identifier'].push(typeof this.nationalProviderIdentifier.toFHIR === 'function' ? this.nationalProviderIdentifier.toFHIR() : this.nationalProviderIdentifier);
    }
    if (this.person != null && this.person.activeFlag != null) {
      inst['active'] = typeof this.person.activeFlag.toFHIR === 'function' ? this.person.activeFlag.toFHIR() : this.person.activeFlag;
    }
    if (this.person != null && this.person.humanName != null) {
      inst['name'] = inst ['name'] || [];
      inst['name'].push(typeof this.person.humanName.toFHIR === 'function' ? this.person.humanName.toFHIR() : this.person.humanName);
    }
    if (this.person != null && this.person.contactPoint != null) {
      inst['telecom'] = typeof this.person.contactPoint.toFHIR === 'function' ? this.person.contactPoint.toFHIR() : this.person.contactPoint;
    }
    if (this.person != null && this.person.address != null) {
      inst['address'] = typeof this.person.address.toFHIR === 'function' ? this.person.address.toFHIR() : this.person.address;
    }
    if (this.person != null && this.person.administrativeGender != null) {
      inst['gender'] = typeof this.person.administrativeGender.toFHIR === 'function' ? this.person.administrativeGender.toFHIR() : this.person.administrativeGender;
    }
    if (this.person != null && this.person.headshot != null) {
      inst['photo'] = typeof this.person.headshot.toFHIR === 'function' ? this.person.headshot.toFHIR() : this.person.headshot;
    }
    if (this.qualification != null) {
      inst['qualification'] = inst ['qualification'] || [];
      inst['qualification'].concat(this.qualification.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.type != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['code'] = inst ['qualification']['code'] || [];
      inst['qualification']['code'].concat(this.qualification.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.effectiveTimePeriod != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['period'] = inst ['qualification']['period'] || [];
      inst['qualification']['period'].concat(this.qualification.effectiveTimePeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.qualification != null && this.qualification.issuer != null) {
      if(inst['qualification'] === undefined) {
        inst['qualification'] = {};
      }
      inst['qualification']['issuer'] = inst ['qualification']['issuer'] || [];
      inst['qualification']['issuer'].concat(this.qualification.issuer.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.person != null && this.person.languageUsed != null) {
      inst['communication'] = typeof this.person.languageUsed.toFHIR === 'function' ? this.person.languageUsed.toFHIR() : this.person.languageUsed;
    }
    return inst;
  }
}
export default Practitioner;
