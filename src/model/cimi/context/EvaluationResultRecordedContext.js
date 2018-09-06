import { setPropertiesFromJSON } from '../../json-helper';

import RecordedContext from './RecordedContext';

/**
 * Generated class for cimi.context.EvaluationResultRecordedContext.
 * @extends RecordedContext
 */
class EvaluationResultRecordedContext extends RecordedContext {

  /**
   * Get the ResultValue.
   * @returns {ResultValue} The cimi.context.ResultValue
   */
  get resultValue() {
    return this._resultValue;
  }

  /**
   * Set the ResultValue.
   * @param {ResultValue} resultValue - The cimi.context.ResultValue
   */
  set resultValue(resultValue) {
    this._resultValue = resultValue;
  }

  /**
   * Set the ResultValue and return 'this' for chaining.
   * @param {ResultValue} resultValue - The cimi.context.ResultValue
   * @returns {EvaluationResultRecordedContext} this.
   */
  withResultValue(resultValue) {
    this.resultValue = resultValue; return this;
  }

  /**
   * Get the ExceptionValue.
   * @returns {ExceptionValue} The cimi.context.ExceptionValue
   */
  get exceptionValue() {
    return this._exceptionValue;
  }

  /**
   * Set the ExceptionValue.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   */
  set exceptionValue(exceptionValue) {
    this._exceptionValue = exceptionValue;
  }

  /**
   * Set the ExceptionValue and return 'this' for chaining.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   * @returns {EvaluationResultRecordedContext} this.
   */
  withExceptionValue(exceptionValue) {
    this.exceptionValue = exceptionValue; return this;
  }

  /**
   * Get the DeltaFlag.
   * @returns {DeltaFlag} The cimi.context.DeltaFlag
   */
  get deltaFlag() {
    return this._deltaFlag;
  }

  /**
   * Set the DeltaFlag.
   * @param {DeltaFlag} deltaFlag - The cimi.context.DeltaFlag
   */
  set deltaFlag(deltaFlag) {
    this._deltaFlag = deltaFlag;
  }

  /**
   * Set the DeltaFlag and return 'this' for chaining.
   * @param {DeltaFlag} deltaFlag - The cimi.context.DeltaFlag
   * @returns {EvaluationResultRecordedContext} this.
   */
  withDeltaFlag(deltaFlag) {
    this.deltaFlag = deltaFlag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EvaluationResultRecordedContext class.
   * The JSON must be valid against the EvaluationResultRecordedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EvaluationResultRecordedContext} An instance of EvaluationResultRecordedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EvaluationResultRecordedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EvaluationResultRecordedContext class to a JSON object.
   * The JSON is expected to be valid against the EvaluationResultRecordedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/context/EvaluationResultRecordedContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.resultValue != null) {
      inst['ResultValue'] = typeof this.resultValue.toJSON === 'function' ? this.resultValue.toJSON() : this.resultValue;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.deltaFlag != null) {
      inst['DeltaFlag'] = typeof this.deltaFlag.toJSON === 'function' ? this.deltaFlag.toJSON() : this.deltaFlag;
    }
    return inst;
  }
}
export default EvaluationResultRecordedContext;
