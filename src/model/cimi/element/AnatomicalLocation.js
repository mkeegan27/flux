import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.element.AnatomicalLocation.
 */
class AnatomicalLocation {

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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the Laterality.
   * @returns {Laterality} The cimi.element.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * @param {Laterality} laterality - The cimi.element.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * @param {Laterality} laterality - The cimi.element.Laterality
   * @returns {AnatomicalLocation} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
  }

  /**
   * Get the AnatomicalDirection.
   * @returns {AnatomicalDirection} The cimi.element.AnatomicalDirection
   */
  get anatomicalDirection() {
    return this._anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection.
   * @param {AnatomicalDirection} anatomicalDirection - The cimi.element.AnatomicalDirection
   */
  set anatomicalDirection(anatomicalDirection) {
    this._anatomicalDirection = anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection and return 'this' for chaining.
   * @param {AnatomicalDirection} anatomicalDirection - The cimi.element.AnatomicalDirection
   * @returns {AnatomicalLocation} this.
   */
  withAnatomicalDirection(anatomicalDirection) {
    this.anatomicalDirection = anatomicalDirection; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AnatomicalLocation class.
   * The JSON must be valid against the AnatomicalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AnatomicalLocation} An instance of AnatomicalLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AnatomicalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AnatomicalLocation class to a JSON object.
   * The JSON is expected to be valid against the AnatomicalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/element/AnatomicalLocation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.laterality != null) {
      inst['Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['AnatomicalDirection'] = typeof this.anatomicalDirection.toJSON === 'function' ? this.anatomicalDirection.toJSON() : this.anatomicalDirection;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AnatomicalLocation class to a FHIR object.
   * The FHIR is expected to be valid against the AnatomicalLocation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.laterality != null) {
      inst['qualifier'] = typeof this.laterality.toFHIR === 'function' ? this.laterality.toFHIR() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['qualifier'] = typeof this.anatomicalDirection.toFHIR === 'function' ? this.anatomicalDirection.toFHIR() : this.anatomicalDirection;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-element-AnatomicalLocation-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default AnatomicalLocation;
