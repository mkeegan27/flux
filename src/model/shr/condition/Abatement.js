import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.condition.Abatement.
 */
class Abatement {

  /**
   * Get the value (aliases generalizedTemporalContext).
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get value() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the value (aliases generalizedTemporalContext).
   * This field/value is required.
   * @param {GeneralizedTemporalContext} value - The shr.core.GeneralizedTemporalContext
   */
  set value(value) {
    this._generalizedTemporalContext = value;
  }

  /**
   * Set the value (aliases generalizedTemporalContext) and return 'this' for chaining.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} value - The shr.core.GeneralizedTemporalContext
   * @returns {Abatement} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the GeneralizedTemporalContext.
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get generalizedTemporalContext() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   */
  set generalizedTemporalContext(generalizedTemporalContext) {
    this._generalizedTemporalContext = generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext and return 'this' for chaining.
   * This field/value is required.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   * @returns {Abatement} this.
   */
  withGeneralizedTemporalContext(generalizedTemporalContext) {
    this.generalizedTemporalContext = generalizedTemporalContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Abatement class.
   * The JSON must be valid against the Abatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Abatement} An instance of Abatement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Abatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Abatement class to a JSON object.
   * The JSON is expected to be valid against the Abatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/condition/Abatement' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Abatement class to a FHIR object.
   * The FHIR is expected to be valid against the Abatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.generalizedTemporalContext.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-condition-Abatement-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Abatement;
