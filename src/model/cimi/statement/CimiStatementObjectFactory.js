import { getNamespaceAndName } from '../../json-helper';
import ClinicalStatement from './ClinicalStatement';
import ActionStatement from './ActionStatement';
import ActionPerformedStatement from './ActionPerformedStatement';
import FindingStatement from './FindingStatement';
import Observation from './Observation';
import NonLaboratoryObservation from './NonLaboratoryObservation';
import CodedNonLaboratoryObservation from './CodedNonLaboratoryObservation';
import SimpleCodedNonLaboratoryObservation from './SimpleCodedNonLaboratoryObservation';
import ActionNotPerformedStatement from './ActionNotPerformedStatement';
import ActionRequestedStatement from './ActionRequestedStatement';
import ActionRequestedAgainstStatement from './ActionRequestedAgainstStatement';
import SimpleNonLaboratoryObservation from './SimpleNonLaboratoryObservation';
import ComponentOnlyNonLaboratoryObservation from './ComponentOnlyNonLaboratoryObservation';
import PanelOnlyNonLaboratoryObservation from './PanelOnlyNonLaboratoryObservation';
import LaboratoryObservation from './LaboratoryObservation';
import CodedLaboratoryObservation from './CodedLaboratoryObservation';
import SimpleLaboratoryObservation from './SimpleLaboratoryObservation';
import SimpleCodedLaboratoryObservation from './SimpleCodedLaboratoryObservation';
import AssertionStatement from './AssertionStatement';
import AssertionPresenceStatement from './AssertionPresenceStatement';
import AssertionAbsenceStatement from './AssertionAbsenceStatement';
import ConditionPresenceStatement from './ConditionPresenceStatement';
import ConditionAbsenceStatement from './ConditionAbsenceStatement';
import ClinicalNote from './ClinicalNote';

/**
 * Generated object factory for the cimi.statement namespace.
 */
export default class CimiStatementObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.statement') {
      throw new Error(`Unsupported type in CimiStatementObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ClinicalStatement': return ClinicalStatement.fromJSON(json);
    case 'ActionStatement': return ActionStatement.fromJSON(json);
    case 'ActionPerformedStatement': return ActionPerformedStatement.fromJSON(json);
    case 'FindingStatement': return FindingStatement.fromJSON(json);
    case 'Observation': return Observation.fromJSON(json);
    case 'NonLaboratoryObservation': return NonLaboratoryObservation.fromJSON(json);
    case 'CodedNonLaboratoryObservation': return CodedNonLaboratoryObservation.fromJSON(json);
    case 'SimpleCodedNonLaboratoryObservation': return SimpleCodedNonLaboratoryObservation.fromJSON(json);
    case 'ActionNotPerformedStatement': return ActionNotPerformedStatement.fromJSON(json);
    case 'ActionRequestedStatement': return ActionRequestedStatement.fromJSON(json);
    case 'ActionRequestedAgainstStatement': return ActionRequestedAgainstStatement.fromJSON(json);
    case 'SimpleNonLaboratoryObservation': return SimpleNonLaboratoryObservation.fromJSON(json);
    case 'ComponentOnlyNonLaboratoryObservation': return ComponentOnlyNonLaboratoryObservation.fromJSON(json);
    case 'PanelOnlyNonLaboratoryObservation': return PanelOnlyNonLaboratoryObservation.fromJSON(json);
    case 'LaboratoryObservation': return LaboratoryObservation.fromJSON(json);
    case 'CodedLaboratoryObservation': return CodedLaboratoryObservation.fromJSON(json);
    case 'SimpleLaboratoryObservation': return SimpleLaboratoryObservation.fromJSON(json);
    case 'SimpleCodedLaboratoryObservation': return SimpleCodedLaboratoryObservation.fromJSON(json);
    case 'AssertionStatement': return AssertionStatement.fromJSON(json);
    case 'AssertionPresenceStatement': return AssertionPresenceStatement.fromJSON(json);
    case 'AssertionAbsenceStatement': return AssertionAbsenceStatement.fromJSON(json);
    case 'ConditionPresenceStatement': return ConditionPresenceStatement.fromJSON(json);
    case 'ConditionAbsenceStatement': return ConditionAbsenceStatement.fromJSON(json);
    case 'ClinicalNote': return ClinicalNote.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiStatementObjectFactory: ${type}`);
    }
  }
}
