import { getNamespaceAndName } from '../../json-helper';
import StatementTopic from './StatementTopic';
import FindingTopic from './FindingTopic';
import AssertionTopic from './AssertionTopic';
import TopicCode from './TopicCode';
import ActionTopic from './ActionTopic';
import ObservationTopic from './ObservationTopic';
import LaboratoryObservationTopic from './LaboratoryObservationTopic';
import FindingMethod from './FindingMethod';
import EvaluationComponent from './EvaluationComponent';
import CodedEvaluationComponent from './CodedEvaluationComponent';
import PanelMembers from './PanelMembers';
import Precondition from './Precondition';
import ReferenceRange from './ReferenceRange';
import ApplicableSubpopulation from './ApplicableSubpopulation';
import ApplicableAgeRange from './ApplicableAgeRange';
import DiagnosticService from './DiagnosticService';
import ConditionAssertionTopic from './ConditionAssertionTopic';
import ConditionCause from './ConditionCause';
import AlleviatingFactor from './AlleviatingFactor';
import ExacerbatingFactor from './ExacerbatingFactor';

/**
 * Generated object factory for the cimi.topic namespace.
 */
export default class CimiTopicObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.topic') {
      throw new Error(`Unsupported type in CimiTopicObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'StatementTopic': return StatementTopic.fromJSON(json);
    case 'FindingTopic': return FindingTopic.fromJSON(json);
    case 'AssertionTopic': return AssertionTopic.fromJSON(json);
    case 'TopicCode': return TopicCode.fromJSON(json);
    case 'ActionTopic': return ActionTopic.fromJSON(json);
    case 'ObservationTopic': return ObservationTopic.fromJSON(json);
    case 'LaboratoryObservationTopic': return LaboratoryObservationTopic.fromJSON(json);
    case 'FindingMethod': return FindingMethod.fromJSON(json);
    case 'EvaluationComponent': return EvaluationComponent.fromJSON(json);
    case 'CodedEvaluationComponent': return CodedEvaluationComponent.fromJSON(json);
    case 'PanelMembers': return PanelMembers.fromJSON(json);
    case 'Precondition': return Precondition.fromJSON(json);
    case 'ReferenceRange': return ReferenceRange.fromJSON(json);
    case 'ApplicableSubpopulation': return ApplicableSubpopulation.fromJSON(json);
    case 'ApplicableAgeRange': return ApplicableAgeRange.fromJSON(json);
    case 'DiagnosticService': return DiagnosticService.fromJSON(json);
    case 'ConditionAssertionTopic': return ConditionAssertionTopic.fromJSON(json);
    case 'ConditionCause': return ConditionCause.fromJSON(json);
    case 'AlleviatingFactor': return AlleviatingFactor.fromJSON(json);
    case 'ExacerbatingFactor': return ExacerbatingFactor.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiTopicObjectFactory: ${type}`);
    }
  }
}
