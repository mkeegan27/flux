import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for cimi.entity.Person.
 * @extends Entity
 */
class Person extends Entity {

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
   * @returns {Person} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the HumanName array.
   * @returns {Array<HumanName>} The shr.core.HumanName array
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName array.
   * This field/value is required.
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Set the HumanName array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<HumanName>} humanName - The shr.core.HumanName array
   * @returns {Person} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
  }

  /**
   * Get the DateOfBirth.
   * @returns {DateOfBirth} The cimi.entity.DateOfBirth
   */
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Set the DateOfBirth.
   * @param {DateOfBirth} dateOfBirth - The cimi.entity.DateOfBirth
   */
  set dateOfBirth(dateOfBirth) {
    this._dateOfBirth = dateOfBirth;
  }

  /**
   * Set the DateOfBirth and return 'this' for chaining.
   * @param {DateOfBirth} dateOfBirth - The cimi.entity.DateOfBirth
   * @returns {Person} this.
   */
  withDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth; return this;
  }

  /**
   * Get the AdministrativeGender.
   * @returns {AdministrativeGender} The cimi.entity.AdministrativeGender
   */
  get administrativeGender() {
    return this._administrativeGender;
  }

  /**
   * Set the AdministrativeGender.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The cimi.entity.AdministrativeGender
   */
  set administrativeGender(administrativeGender) {
    this._administrativeGender = administrativeGender;
  }

  /**
   * Set the AdministrativeGender and return 'this' for chaining.
   * This field/value is required.
   * @param {AdministrativeGender} administrativeGender - The cimi.entity.AdministrativeGender
   * @returns {Person} this.
   */
  withAdministrativeGender(administrativeGender) {
    this.administrativeGender = administrativeGender; return this;
  }

  /**
   * Get the Address array.
   * @returns {Array<Address>} The shr.core.Address array
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address array.
   * @param {Array<Address>} address - The shr.core.Address array
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Set the Address array and return 'this' for chaining.
   * @param {Array<Address>} address - The shr.core.Address array
   * @returns {Person} this.
   */
  withAddress(address) {
    this.address = address; return this;
  }

  /**
   * Get the Headshot array.
   * @returns {Array<Headshot>} The cimi.entity.Headshot array
   */
  get headshot() {
    return this._headshot;
  }

  /**
   * Set the Headshot array.
   * @param {Array<Headshot>} headshot - The cimi.entity.Headshot array
   */
  set headshot(headshot) {
    this._headshot = headshot;
  }

  /**
   * Set the Headshot array and return 'this' for chaining.
   * @param {Array<Headshot>} headshot - The cimi.entity.Headshot array
   * @returns {Person} this.
   */
  withHeadshot(headshot) {
    this.headshot = headshot; return this;
  }

  /**
   * Get the ContactPoint array.
   * @returns {Array<ContactPoint>} The shr.core.ContactPoint array
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint array.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Set the ContactPoint array and return 'this' for chaining.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   * @returns {Person} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
  }

  /**
   * Get the LanguageUsed array.
   * @returns {Array<LanguageUsed>} The cimi.entity.LanguageUsed array
   */
  get languageUsed() {
    return this._languageUsed;
  }

  /**
   * Set the LanguageUsed array.
   * @param {Array<LanguageUsed>} languageUsed - The cimi.entity.LanguageUsed array
   */
  set languageUsed(languageUsed) {
    this._languageUsed = languageUsed;
  }

  /**
   * Set the LanguageUsed array and return 'this' for chaining.
   * @param {Array<LanguageUsed>} languageUsed - The cimi.entity.LanguageUsed array
   * @returns {Person} this.
   */
  withLanguageUsed(languageUsed) {
    this.languageUsed = languageUsed; return this;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The cimi.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   * @returns {Person} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Person class.
   * The JSON must be valid against the Person JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Person} An instance of Person populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Person();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Person class to a JSON object.
   * The JSON is expected to be valid against the Person JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Person' };
    if (this.humanName != null) {
      inst['HumanName'] = this.humanName.map(f => f.toJSON());
    }
    if (this.dateOfBirth != null) {
      inst['DateOfBirth'] = typeof this.dateOfBirth.toJSON === 'function' ? this.dateOfBirth.toJSON() : this.dateOfBirth;
    }
    if (this.administrativeGender != null) {
      inst['AdministrativeGender'] = typeof this.administrativeGender.toJSON === 'function' ? this.administrativeGender.toJSON() : this.administrativeGender;
    }
    if (this.address != null) {
      inst['Address'] = this.address.map(f => f.toJSON());
    }
    if (this.headshot != null) {
      inst['Headshot'] = this.headshot.map(f => f.toJSON());
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = this.contactPoint.map(f => f.toJSON());
    }
    if (this.languageUsed != null) {
      inst['LanguageUsed'] = this.languageUsed.map(f => f.toJSON());
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Person class to a FHIR object.
   * The FHIR is expected to be valid against the Person FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.humanName != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.humanName.toFHIR(true));
    }
    if (this.dateOfBirth != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.dateOfBirth.toFHIR(true));
    }
    if (this.administrativeGender != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.administrativeGender.toFHIR(true));
    }
    if (this.address != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.address.toFHIR(true));
    }
    if (this.headshot != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.headshot.toFHIR(true));
    }
    if (this.contactPoint != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.contactPoint.toFHIR(true));
    }
    if (this.languageUsed != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.languageUsed.toFHIR(true));
    }
    if (this.activeFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.activeFlag.toFHIR(true));
    }
    return inst;
  }
}
export default Person;
