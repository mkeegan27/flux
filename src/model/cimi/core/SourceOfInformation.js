import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for cimi.core.SourceOfInformation.
 */
class SourceOfInformation {

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
   * @returns {SourceOfInformation} this.
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
   * @returns {SourceOfInformation} this.
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
   * @returns {SourceOfInformation} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SourceOfInformation class.
   * The JSON must be valid against the SourceOfInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SourceOfInformation} An instance of SourceOfInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SourceOfInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SourceOfInformation class to a JSON object.
   * The JSON is expected to be valid against the SourceOfInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/core/SourceOfInformation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }
}
export default SourceOfInformation;
