import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.adverse.Manifestation.
 */
class Manifestation {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {Manifestation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {Manifestation} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
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
   * @returns {Manifestation} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Manifestation class.
   * The JSON must be valid against the Manifestation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Manifestation} An instance of Manifestation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Manifestation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Manifestation class to a JSON object.
   * The JSON is expected to be valid against the Manifestation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/Manifestation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Manifestation class to a FHIR object.
   * The FHIR is expected to be valid against the Manifestation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codeableConcept.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.severity.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-adverse-Manifestation-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Manifestation;
