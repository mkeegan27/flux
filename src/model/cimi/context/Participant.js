import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.context.Participant.
 */
class Participant {

  /**
   * Get the value (aliases entityOrRole).
   * @returns {Reference} The cimi.entity.EntityOrRole reference
   */
  get value() {
    return this._entityOrRole;
  }

  /**
   * Set the value (aliases entityOrRole).
   * This field/value is required.
   * @param {Reference} value - The cimi.entity.EntityOrRole reference
   */
  set value(value) {
    this._entityOrRole = value;
  }

  /**
   * Set the value (aliases entityOrRole) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.entity.EntityOrRole reference.
   * @returns {Reference} The cimi.entity.EntityOrRole reference
   */
  get entityOrRole() {
    return this._entityOrRole;
  }

  /**
   * Set the cimi.entity.EntityOrRole reference.
   * This field/value is required.
   * @param {Reference} entityOrRole - The cimi.entity.EntityOrRole reference
   */
  set entityOrRole(entityOrRole) {
    this._entityOrRole = entityOrRole;
  }

  /**
   * Set the cimi.entity.EntityOrRole reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} entityOrRole - The cimi.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Get the ParticipationType.
   * @returns {ParticipationType} The cimi.context.ParticipationType
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Set the ParticipationType.
   * @param {ParticipationType} participationType - The cimi.context.ParticipationType
   */
  set participationType(participationType) {
    this._participationType = participationType;
  }

  /**
   * Set the ParticipationType and return 'this' for chaining.
   * @param {ParticipationType} participationType - The cimi.context.ParticipationType
   * @returns {Participant} this.
   */
  withParticipationType(participationType) {
    this.participationType = participationType; return this;
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
   * @returns {Participant} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
  }

  /**
   * Get the OnBehalfOf.
   * @returns {OnBehalfOf} The cimi.element.OnBehalfOf
   */
  get onBehalfOf() {
    return this._onBehalfOf;
  }

  /**
   * Set the OnBehalfOf.
   * @param {OnBehalfOf} onBehalfOf - The cimi.element.OnBehalfOf
   */
  set onBehalfOf(onBehalfOf) {
    this._onBehalfOf = onBehalfOf;
  }

  /**
   * Set the OnBehalfOf and return 'this' for chaining.
   * @param {OnBehalfOf} onBehalfOf - The cimi.element.OnBehalfOf
   * @returns {Participant} this.
   */
  withOnBehalfOf(onBehalfOf) {
    this.onBehalfOf = onBehalfOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Participant class.
   * The JSON must be valid against the Participant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Participant} An instance of Participant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Participant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Participant class to a JSON object.
   * The JSON is expected to be valid against the Participant JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/Participant' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.participationType != null) {
      inst['ParticipationType'] = typeof this.participationType.toJSON === 'function' ? this.participationType.toJSON() : this.participationType;
    }
    if (this.participationPeriod != null) {
      inst['ParticipationPeriod'] = typeof this.participationPeriod.toJSON === 'function' ? this.participationPeriod.toJSON() : this.participationPeriod;
    }
    if (this.onBehalfOf != null) {
      inst['OnBehalfOf'] = typeof this.onBehalfOf.toJSON === 'function' ? this.onBehalfOf.toJSON() : this.onBehalfOf;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Participant class to a FHIR object.
   * The FHIR is expected to be valid against the Participant FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.entityOrRole.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.participationType.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.participationPeriod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.onBehalfOf.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-context-Participant-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Participant;
