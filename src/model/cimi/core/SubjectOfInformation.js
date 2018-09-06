import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.SubjectOfInformation.
 */
class SubjectOfInformation {

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
   * @returns {SubjectOfInformation} this.
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
   * @returns {SubjectOfInformation} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Get the RelationshipToPersonOfRecord.
   * @returns {RelationshipToPersonOfRecord} The cimi.core.RelationshipToPersonOfRecord
   */
  get relationshipToPersonOfRecord() {
    return this._relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The cimi.core.RelationshipToPersonOfRecord
   */
  set relationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this._relationshipToPersonOfRecord = relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord and return 'this' for chaining.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The cimi.core.RelationshipToPersonOfRecord
   * @returns {SubjectOfInformation} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SubjectOfInformation class.
   * The JSON must be valid against the SubjectOfInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SubjectOfInformation} An instance of SubjectOfInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SubjectOfInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SubjectOfInformation class to a JSON object.
   * The JSON is expected to be valid against the SubjectOfInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/SubjectOfInformation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['cimi.core.RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SubjectOfInformation class to a FHIR object.
   * The FHIR is expected to be valid against the SubjectOfInformation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.entityOrRole.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relationshipToPersonOfRecord.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/cimi-core-SubjectOfInformation-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default SubjectOfInformation;
