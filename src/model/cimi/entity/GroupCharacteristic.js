import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.entity.GroupCharacteristic.
 */
class GroupCharacteristic {

  /**
   * Get the choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept.
   * @returns {(boolean|Quantity|Range|CodeableConcept)} The choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept.
   * This field/value is required.
   * @param {(boolean|Quantity|Range|CodeableConcept)} value - The choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {(boolean|Quantity|Range|CodeableConcept)} value - The choice value; one of: boolean, shr.core.Quantity, shr.core.Range, shr.core.CodeableConcept
   * @returns {GroupCharacteristic} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the GroupCharacteristicCode.
   * @returns {GroupCharacteristicCode} The cimi.entity.GroupCharacteristicCode
   */
  get groupCharacteristicCode() {
    return this._groupCharacteristicCode;
  }

  /**
   * Set the GroupCharacteristicCode.
   * This field/value is required.
   * @param {GroupCharacteristicCode} groupCharacteristicCode - The cimi.entity.GroupCharacteristicCode
   */
  set groupCharacteristicCode(groupCharacteristicCode) {
    this._groupCharacteristicCode = groupCharacteristicCode;
  }

  /**
   * Set the GroupCharacteristicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {GroupCharacteristicCode} groupCharacteristicCode - The cimi.entity.GroupCharacteristicCode
   * @returns {GroupCharacteristic} this.
   */
  withGroupCharacteristicCode(groupCharacteristicCode) {
    this.groupCharacteristicCode = groupCharacteristicCode; return this;
  }

  /**
   * Get the ExcludeFlag.
   * @returns {ExcludeFlag} The cimi.entity.ExcludeFlag
   */
  get excludeFlag() {
    return this._excludeFlag;
  }

  /**
   * Set the ExcludeFlag.
   * This field/value is required.
   * @param {ExcludeFlag} excludeFlag - The cimi.entity.ExcludeFlag
   */
  set excludeFlag(excludeFlag) {
    this._excludeFlag = excludeFlag;
  }

  /**
   * Set the ExcludeFlag and return 'this' for chaining.
   * This field/value is required.
   * @param {ExcludeFlag} excludeFlag - The cimi.entity.ExcludeFlag
   * @returns {GroupCharacteristic} this.
   */
  withExcludeFlag(excludeFlag) {
    this.excludeFlag = excludeFlag; return this;
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
   * @returns {GroupCharacteristic} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GroupCharacteristic class.
   * The JSON must be valid against the GroupCharacteristic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GroupCharacteristic} An instance of GroupCharacteristic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GroupCharacteristic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GroupCharacteristic class to a JSON object.
   * The JSON is expected to be valid against the GroupCharacteristic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/GroupCharacteristic' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.groupCharacteristicCode != null) {
      inst['GroupCharacteristicCode'] = typeof this.groupCharacteristicCode.toJSON === 'function' ? this.groupCharacteristicCode.toJSON() : this.groupCharacteristicCode;
    }
    if (this.excludeFlag != null) {
      inst['ExcludeFlag'] = typeof this.excludeFlag.toJSON === 'function' ? this.excludeFlag.toJSON() : this.excludeFlag;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the GroupCharacteristic class to a FHIR object.
   * The FHIR is expected to be valid against the GroupCharacteristic FHIR profile, but no validation checks are performed.
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
export default GroupCharacteristic;
