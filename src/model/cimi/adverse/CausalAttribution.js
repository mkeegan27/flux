import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.adverse.CausalAttribution.
 */
class CausalAttribution {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, cimi.entity.Substance reference, cimi.entity.Medication reference, cimi.medication.MedicationUsedStatement reference, cimi.entity.Device reference
   * @returns {CausalAttribution} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CauseCategory.
   * @returns {CauseCategory} The cimi.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Set the CauseCategory.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The cimi.adverse.CauseCategory
   */
  set causeCategory(causeCategory) {
    this._causeCategory = causeCategory;
  }

  /**
   * Set the CauseCategory and return 'this' for chaining.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The cimi.adverse.CauseCategory
   * @returns {CausalAttribution} this.
   */
  withCauseCategory(causeCategory) {
    this.causeCategory = causeCategory; return this;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The cimi.context.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * This field/value is required.
   * @param {Certainty} certainty - The cimi.context.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Set the Certainty and return 'this' for chaining.
   * This field/value is required.
   * @param {Certainty} certainty - The cimi.context.Certainty
   * @returns {CausalAttribution} this.
   */
  withCertainty(certainty) {
    this.certainty = certainty; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The cimi.element.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The cimi.element.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The cimi.element.RouteIntoBody
   * @returns {CausalAttribution} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CausalAttribution class.
   * The JSON must be valid against the CausalAttribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CausalAttribution} An instance of CausalAttribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CausalAttribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CausalAttribution class to a JSON object.
   * The JSON is expected to be valid against the CausalAttribution JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/CausalAttribution' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.causeCategory != null) {
      inst['CauseCategory'] = typeof this.causeCategory.toJSON === 'function' ? this.causeCategory.toJSON() : this.causeCategory;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    return inst;
  }
  /**
   * Serializes an instance of the CausalAttribution class to a FHIR object.
   * The FHIR is expected to be valid against the CausalAttribution FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codeableConcept.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.substance.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medication.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.medicationUsedStatement.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.device.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.causeCategory.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.certainty.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.routeIntoBody.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-adverse-CausalAttribution-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default CausalAttribution;
