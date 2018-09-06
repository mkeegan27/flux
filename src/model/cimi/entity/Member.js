import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.entity.Member.
 */
class Member {

  /**
   * Get the choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference.
   * @returns {Reference} The choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: cimi.entity.Patient reference, cimi.entity.Practitioner reference, cimi.entity.Device reference, cimi.entity.Medication reference, cimi.entity.Substance reference
   * @returns {Member} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The cimi.context.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * @param {ParticipationPeriod} participationPeriod - The cimi.context.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * @param {ParticipationPeriod} participationPeriod - The cimi.context.ParticipationPeriod
   * @returns {Member} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
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
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   * @returns {Member} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Member class.
   * The JSON must be valid against the Member JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Member} An instance of Member populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Member();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Member class to a JSON object.
   * The JSON is expected to be valid against the Member JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Member' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.participationPeriod != null) {
      inst['ParticipationPeriod'] = typeof this.participationPeriod.toJSON === 'function' ? this.participationPeriod.toJSON() : this.participationPeriod;
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Member class to a FHIR object.
   * The FHIR is expected to be valid against the Member FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Member;
