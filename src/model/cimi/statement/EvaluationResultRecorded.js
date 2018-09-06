import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from './ClinicalStatement';

/**
 * Generated class for cimi.statement.EvaluationResultRecorded.
 * @extends ClinicalStatement
 */
class EvaluationResultRecorded extends ClinicalStatement {

  /**
   * Get the EvaluationResultTopic.
   * @returns {EvaluationResultTopic} The cimi.topic.EvaluationResultTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the EvaluationResultTopic.
   * This field/value is required.
   * @param {EvaluationResultTopic} statementTopic - The cimi.topic.EvaluationResultTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the EvaluationResultTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {EvaluationResultTopic} statementTopic - The cimi.topic.EvaluationResultTopic
   * @returns {EvaluationResultRecorded} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the EvaluationResultRecordedContext.
   * @returns {EvaluationResultRecordedContext} The cimi.context.EvaluationResultRecordedContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the EvaluationResultRecordedContext.
   * This field/value is required.
   * @param {EvaluationResultRecordedContext} statementContext - The cimi.context.EvaluationResultRecordedContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the EvaluationResultRecordedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {EvaluationResultRecordedContext} statementContext - The cimi.context.EvaluationResultRecordedContext
   * @returns {EvaluationResultRecorded} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EvaluationResultRecorded class.
   * The JSON must be valid against the EvaluationResultRecorded JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EvaluationResultRecorded} An instance of EvaluationResultRecorded populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EvaluationResultRecorded();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EvaluationResultRecorded class to a JSON object.
   * The JSON is expected to be valid against the EvaluationResultRecorded JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/statement/EvaluationResultRecorded' } };
    if (this.subjectOfInformation != null) {
      inst['SubjectOfInformation'] = typeof this.subjectOfInformation.toJSON === 'function' ? this.subjectOfInformation.toJSON() : this.subjectOfInformation;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.recordStatus != null) {
      inst['RecordStatus'] = typeof this.recordStatus.toJSON === 'function' ? this.recordStatus.toJSON() : this.recordStatus;
    }
    if (this.recorded != null) {
      inst['Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.cosigned != null) {
      inst['Cosigned'] = this.cosigned.map(f => f.toJSON());
    }
    if (this.verified != null) {
      inst['Verified'] = this.verified.map(f => f.toJSON());
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
}
export default EvaluationResultRecorded;
