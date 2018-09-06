import { getNamespaceAndName } from '../../json-helper';
import MedicationTopic from './MedicationTopic';
import AdditionalDoseInstruction from './AdditionalDoseInstruction';
import AdministrationMethod from './AdministrationMethod';
import Dosage from './Dosage';
import DoseAmount from './DoseAmount';
import TimingOfDoses from './TimingOfDoses';
import AsNeededIndicator from './AsNeededIndicator';
import DoseInstructionsText from './DoseInstructionsText';
import AdministrationBodySite from './AdministrationBodySite';
import MaximumDosePerTimePeriod from './MaximumDosePerTimePeriod';
import MedicationDispenseTopic from './MedicationDispenseTopic';
import NumberOfRefillsAllowed from './NumberOfRefillsAllowed';
import QuantityPerDispense from './QuantityPerDispense';
import SupplyDuration from './SupplyDuration';
import MedicationUseTopic from './MedicationUseTopic';
import MedicationChangeTopic from './MedicationChangeTopic';
import MedicationBeforeChange from './MedicationBeforeChange';
import MedicationAfterChange from './MedicationAfterChange';
import MedicationUsedStatement from './MedicationUsedStatement';
import MedicationAdherenceStatement from './MedicationAdherenceStatement';
import MedicationNonAdherenceReason from './MedicationNonAdherenceReason';
import MedicationNotUsedStatement from './MedicationNotUsedStatement';
import MedicationDispenseRequestedStatement from './MedicationDispenseRequestedStatement';
import MedicationNotPrescribedStatement from './MedicationNotPrescribedStatement';
import MedicationDispensedStatement from './MedicationDispensedStatement';
import MedicationNotDispensedStatement from './MedicationNotDispensedStatement';
import MedicationChangeStatement from './MedicationChangeStatement';

/**
 * Generated object factory for the cimi.medication namespace.
 */
export default class CimiMedicationObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.medication') {
      throw new Error(`Unsupported type in CimiMedicationObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'MedicationTopic': return MedicationTopic.fromJSON(json);
    case 'AdditionalDoseInstruction': return AdditionalDoseInstruction.fromJSON(json);
    case 'AdministrationMethod': return AdministrationMethod.fromJSON(json);
    case 'Dosage': return Dosage.fromJSON(json);
    case 'DoseAmount': return DoseAmount.fromJSON(json);
    case 'TimingOfDoses': return TimingOfDoses.fromJSON(json);
    case 'AsNeededIndicator': return AsNeededIndicator.fromJSON(json);
    case 'DoseInstructionsText': return DoseInstructionsText.fromJSON(json);
    case 'AdministrationBodySite': return AdministrationBodySite.fromJSON(json);
    case 'MaximumDosePerTimePeriod': return MaximumDosePerTimePeriod.fromJSON(json);
    case 'MedicationDispenseTopic': return MedicationDispenseTopic.fromJSON(json);
    case 'NumberOfRefillsAllowed': return NumberOfRefillsAllowed.fromJSON(json);
    case 'QuantityPerDispense': return QuantityPerDispense.fromJSON(json);
    case 'SupplyDuration': return SupplyDuration.fromJSON(json);
    case 'MedicationUseTopic': return MedicationUseTopic.fromJSON(json);
    case 'MedicationChangeTopic': return MedicationChangeTopic.fromJSON(json);
    case 'MedicationBeforeChange': return MedicationBeforeChange.fromJSON(json);
    case 'MedicationAfterChange': return MedicationAfterChange.fromJSON(json);
    case 'MedicationUsedStatement': return MedicationUsedStatement.fromJSON(json);
    case 'MedicationAdherenceStatement': return MedicationAdherenceStatement.fromJSON(json);
    case 'MedicationNonAdherenceReason': return MedicationNonAdherenceReason.fromJSON(json);
    case 'MedicationNotUsedStatement': return MedicationNotUsedStatement.fromJSON(json);
    case 'MedicationDispenseRequestedStatement': return MedicationDispenseRequestedStatement.fromJSON(json);
    case 'MedicationNotPrescribedStatement': return MedicationNotPrescribedStatement.fromJSON(json);
    case 'MedicationDispensedStatement': return MedicationDispensedStatement.fromJSON(json);
    case 'MedicationNotDispensedStatement': return MedicationNotDispensedStatement.fromJSON(json);
    case 'MedicationChangeStatement': return MedicationChangeStatement.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiMedicationObjectFactory: ${type}`);
    }
  }
}
