import { getNamespaceAndName } from '../../json-helper';
import ProcedureTopic from './ProcedureTopic';
import InputFinding from './InputFinding';
import Indication from './Indication';
import ImagingProcedureTopic from './ImagingProcedureTopic';
import ImagingSubstance from './ImagingSubstance';
import LaboratoryProcedureTopic from './LaboratoryProcedureTopic';
import SurgicalProcedureTopic from './SurgicalProcedureTopic';
import DirectSite from './DirectSite';
import DirectSiteCode from './DirectSiteCode';
import IndirectSite from './IndirectSite';
import IndirectSiteCode from './IndirectSiteCode';
import SurgicalApproach from './SurgicalApproach';
import Access from './Access';
import UsingDevice from './UsingDevice';
import UsingDeviceCode from './UsingDeviceCode';
import UsingAccessDevice from './UsingAccessDevice';
import UsingAccessDeviceCode from './UsingAccessDeviceCode';
import IndirectDevice from './IndirectDevice';
import IndirectDeviceCode from './IndirectDeviceCode';
import SpecimenCollectionTopic from './SpecimenCollectionTopic';
import AmountOrSize from './AmountOrSize';
import FHIRProcedureParticipant from './FHIRProcedureParticipant';
import ProcedurePerformedContext from './ProcedurePerformedContext';
import OutputFinding from './OutputFinding';
import ProcedureNotPerformedContext from './ProcedureNotPerformedContext';
import ProcedureRequestedContext from './ProcedureRequestedContext';
import ProcedurePerformedStatement from './ProcedurePerformedStatement';
import ProcedureNotPerformedStatement from './ProcedureNotPerformedStatement';
import ProcedureRequestedStatement from './ProcedureRequestedStatement';
import ProcedureRequestedAgainstStatement from './ProcedureRequestedAgainstStatement';
import SpecimenCollectionPerformedStatement from './SpecimenCollectionPerformedStatement';
import SpecimenCollectionRequestedStatement from './SpecimenCollectionRequestedStatement';
import ImagingProcedurePerformedStatement from './ImagingProcedurePerformedStatement';
import ImagingProcedureRequestedStatement from './ImagingProcedureRequestedStatement';
import SurgicalProcedurePerformedStatement from './SurgicalProcedurePerformedStatement';
import SurgicalProcedureRequestedStatement from './SurgicalProcedureRequestedStatement';
import SurgicalProcedureNotPerformedStatement from './SurgicalProcedureNotPerformedStatement';
import SurgicalProcedureRequestedAgainstStatement from './SurgicalProcedureRequestedAgainstStatement';
import LaboratoryProcedurePerformedStatement from './LaboratoryProcedurePerformedStatement';
import LaboratoryProcedureRequestedStatement from './LaboratoryProcedureRequestedStatement';

/**
 * Generated object factory for the cimi.procedure namespace.
 */
export default class CimiProcedureObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.procedure') {
      throw new Error(`Unsupported type in CimiProcedureObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ProcedureTopic': return ProcedureTopic.fromJSON(json);
    case 'InputFinding': return InputFinding.fromJSON(json);
    case 'Indication': return Indication.fromJSON(json);
    case 'ImagingProcedureTopic': return ImagingProcedureTopic.fromJSON(json);
    case 'ImagingSubstance': return ImagingSubstance.fromJSON(json);
    case 'LaboratoryProcedureTopic': return LaboratoryProcedureTopic.fromJSON(json);
    case 'SurgicalProcedureTopic': return SurgicalProcedureTopic.fromJSON(json);
    case 'DirectSite': return DirectSite.fromJSON(json);
    case 'DirectSiteCode': return DirectSiteCode.fromJSON(json);
    case 'IndirectSite': return IndirectSite.fromJSON(json);
    case 'IndirectSiteCode': return IndirectSiteCode.fromJSON(json);
    case 'SurgicalApproach': return SurgicalApproach.fromJSON(json);
    case 'Access': return Access.fromJSON(json);
    case 'UsingDevice': return UsingDevice.fromJSON(json);
    case 'UsingDeviceCode': return UsingDeviceCode.fromJSON(json);
    case 'UsingAccessDevice': return UsingAccessDevice.fromJSON(json);
    case 'UsingAccessDeviceCode': return UsingAccessDeviceCode.fromJSON(json);
    case 'IndirectDevice': return IndirectDevice.fromJSON(json);
    case 'IndirectDeviceCode': return IndirectDeviceCode.fromJSON(json);
    case 'SpecimenCollectionTopic': return SpecimenCollectionTopic.fromJSON(json);
    case 'AmountOrSize': return AmountOrSize.fromJSON(json);
    case 'FHIRProcedureParticipant': return FHIRProcedureParticipant.fromJSON(json);
    case 'ProcedurePerformedContext': return ProcedurePerformedContext.fromJSON(json);
    case 'OutputFinding': return OutputFinding.fromJSON(json);
    case 'ProcedureNotPerformedContext': return ProcedureNotPerformedContext.fromJSON(json);
    case 'ProcedureRequestedContext': return ProcedureRequestedContext.fromJSON(json);
    case 'ProcedurePerformedStatement': return ProcedurePerformedStatement.fromJSON(json);
    case 'ProcedureNotPerformedStatement': return ProcedureNotPerformedStatement.fromJSON(json);
    case 'ProcedureRequestedStatement': return ProcedureRequestedStatement.fromJSON(json);
    case 'ProcedureRequestedAgainstStatement': return ProcedureRequestedAgainstStatement.fromJSON(json);
    case 'SpecimenCollectionPerformedStatement': return SpecimenCollectionPerformedStatement.fromJSON(json);
    case 'SpecimenCollectionRequestedStatement': return SpecimenCollectionRequestedStatement.fromJSON(json);
    case 'ImagingProcedurePerformedStatement': return ImagingProcedurePerformedStatement.fromJSON(json);
    case 'ImagingProcedureRequestedStatement': return ImagingProcedureRequestedStatement.fromJSON(json);
    case 'SurgicalProcedurePerformedStatement': return SurgicalProcedurePerformedStatement.fromJSON(json);
    case 'SurgicalProcedureRequestedStatement': return SurgicalProcedureRequestedStatement.fromJSON(json);
    case 'SurgicalProcedureNotPerformedStatement': return SurgicalProcedureNotPerformedStatement.fromJSON(json);
    case 'SurgicalProcedureRequestedAgainstStatement': return SurgicalProcedureRequestedAgainstStatement.fromJSON(json);
    case 'LaboratoryProcedurePerformedStatement': return LaboratoryProcedurePerformedStatement.fromJSON(json);
    case 'LaboratoryProcedureRequestedStatement': return LaboratoryProcedureRequestedStatement.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiProcedureObjectFactory: ${type}`);
    }
  }
}
