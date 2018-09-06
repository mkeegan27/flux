import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from '../statement/ClinicalStatement';

/**
 * Generated class for cimi.adverse.AdverseReactionPresenceStatement.
 * @extends ClinicalStatement
 */
class AdverseReactionPresenceStatement extends ClinicalStatement {

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
   * @returns {AdverseReactionPresenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the AdverseReactionTopic.
   * @returns {AdverseReactionTopic} The cimi.adverse.AdverseReactionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the AdverseReactionTopic.
   * This field/value is required.
   * @param {AdverseReactionTopic} statementTopic - The cimi.adverse.AdverseReactionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the AdverseReactionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseReactionTopic} statementTopic - The cimi.adverse.AdverseReactionTopic
   * @returns {AdverseReactionPresenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the PresenceContext.
   * @returns {PresenceContext} The cimi.context.PresenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the PresenceContext.
   * This field/value is required.
   * @param {PresenceContext} statementContext - The cimi.context.PresenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the PresenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PresenceContext} statementContext - The cimi.context.PresenceContext
   * @returns {AdverseReactionPresenceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseReactionPresenceStatement class.
   * The JSON must be valid against the AdverseReactionPresenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseReactionPresenceStatement} An instance of AdverseReactionPresenceStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseReactionPresenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReactionPresenceStatement class to a JSON object.
   * The JSON is expected to be valid against the AdverseReactionPresenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/adverse/AdverseReactionPresenceStatement' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReactionPresenceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseReactionPresenceStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default AdverseReactionPresenceStatement;
