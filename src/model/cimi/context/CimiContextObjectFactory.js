import { getNamespaceAndName } from '../../json-helper';
import Outcome from './Outcome';
import Severity from './Severity';
import StatementContext from './StatementContext';
import FindingContext from './FindingContext';
import AssertionContext from './AssertionContext';
import ContextCode from './ContextCode';
import PresenceContext from './PresenceContext';
import ClinicalStatus from './ClinicalStatus';
import VerificationStatus from './VerificationStatus';
import Criticality from './Criticality';
import ActionContext from './ActionContext';
import Reason from './Reason';
import PerformedContext from './PerformedContext';
import Participant from './Participant';
import ParticipationType from './ParticipationType';
import ParticipationPeriod from './ParticipationPeriod';
import Method from './Method';
import RelatedRequest from './RelatedRequest';
import NotPerformedContext from './NotPerformedContext';
import RequestedContext from './RequestedContext';
import RequestIntent from './RequestIntent';
import ExpectedPerformanceTime from './ExpectedPerformanceTime';
import ExpectedPerformerType from './ExpectedPerformerType';
import ExpectedPerformer from './ExpectedPerformer';
import ExpectedMethod from './ExpectedMethod';
import PerformerInstructions from './PerformerInstructions';
import PatientInstructions from './PatientInstructions';
import CommunicationMethod from './CommunicationMethod';
import RequestedAgainstContext from './RequestedAgainstContext';
import Onset from './Onset';
import Abatement from './Abatement';
import Certainty from './Certainty';
import ConditionPresenceContext from './ConditionPresenceContext';
import WhenClinicallyRecognized from './WhenClinicallyRecognized';
import PresentOnAdmission from './PresentOnAdmission';
import Stage from './Stage';
import StageDetail from './StageDetail';
import RecordedContext from './RecordedContext';
import Interpretation from './Interpretation';
import FindingStatus from './FindingStatus';
import RelevantTime from './RelevantTime';
import ExceptionValue from './ExceptionValue';
import ObservationContext from './ObservationContext';
import ResultValue from './ResultValue';
import DeltaFlag from './DeltaFlag';
import Issued from './Issued';
import Observer from './Observer';
import AbsenceContext from './AbsenceContext';
import AtRiskContext from './AtRiskContext';
import ExpectationContext from './ExpectationContext';
import GoalContext from './GoalContext';

/**
 * Generated object factory for the cimi.context namespace.
 */
export default class CimiContextObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.context') {
      throw new Error(`Unsupported type in CimiContextObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Outcome': return Outcome.fromJSON(json);
    case 'Severity': return Severity.fromJSON(json);
    case 'StatementContext': return StatementContext.fromJSON(json);
    case 'FindingContext': return FindingContext.fromJSON(json);
    case 'AssertionContext': return AssertionContext.fromJSON(json);
    case 'ContextCode': return ContextCode.fromJSON(json);
    case 'PresenceContext': return PresenceContext.fromJSON(json);
    case 'ClinicalStatus': return ClinicalStatus.fromJSON(json);
    case 'VerificationStatus': return VerificationStatus.fromJSON(json);
    case 'Criticality': return Criticality.fromJSON(json);
    case 'ActionContext': return ActionContext.fromJSON(json);
    case 'Reason': return Reason.fromJSON(json);
    case 'PerformedContext': return PerformedContext.fromJSON(json);
    case 'Participant': return Participant.fromJSON(json);
    case 'ParticipationType': return ParticipationType.fromJSON(json);
    case 'ParticipationPeriod': return ParticipationPeriod.fromJSON(json);
    case 'Method': return Method.fromJSON(json);
    case 'RelatedRequest': return RelatedRequest.fromJSON(json);
    case 'NotPerformedContext': return NotPerformedContext.fromJSON(json);
    case 'RequestedContext': return RequestedContext.fromJSON(json);
    case 'RequestIntent': return RequestIntent.fromJSON(json);
    case 'ExpectedPerformanceTime': return ExpectedPerformanceTime.fromJSON(json);
    case 'ExpectedPerformerType': return ExpectedPerformerType.fromJSON(json);
    case 'ExpectedPerformer': return ExpectedPerformer.fromJSON(json);
    case 'ExpectedMethod': return ExpectedMethod.fromJSON(json);
    case 'PerformerInstructions': return PerformerInstructions.fromJSON(json);
    case 'PatientInstructions': return PatientInstructions.fromJSON(json);
    case 'CommunicationMethod': return CommunicationMethod.fromJSON(json);
    case 'RequestedAgainstContext': return RequestedAgainstContext.fromJSON(json);
    case 'Onset': return Onset.fromJSON(json);
    case 'Abatement': return Abatement.fromJSON(json);
    case 'Certainty': return Certainty.fromJSON(json);
    case 'ConditionPresenceContext': return ConditionPresenceContext.fromJSON(json);
    case 'WhenClinicallyRecognized': return WhenClinicallyRecognized.fromJSON(json);
    case 'PresentOnAdmission': return PresentOnAdmission.fromJSON(json);
    case 'Stage': return Stage.fromJSON(json);
    case 'StageDetail': return StageDetail.fromJSON(json);
    case 'RecordedContext': return RecordedContext.fromJSON(json);
    case 'Interpretation': return Interpretation.fromJSON(json);
    case 'FindingStatus': return FindingStatus.fromJSON(json);
    case 'RelevantTime': return RelevantTime.fromJSON(json);
    case 'ExceptionValue': return ExceptionValue.fromJSON(json);
    case 'ObservationContext': return ObservationContext.fromJSON(json);
    case 'ResultValue': return ResultValue.fromJSON(json);
    case 'DeltaFlag': return DeltaFlag.fromJSON(json);
    case 'Issued': return Issued.fromJSON(json);
    case 'Observer': return Observer.fromJSON(json);
    case 'AbsenceContext': return AbsenceContext.fromJSON(json);
    case 'AtRiskContext': return AtRiskContext.fromJSON(json);
    case 'ExpectationContext': return ExpectationContext.fromJSON(json);
    case 'GoalContext': return GoalContext.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiContextObjectFactory: ${type}`);
    }
  }
}
