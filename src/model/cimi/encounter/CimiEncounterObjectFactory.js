import { getNamespaceAndName } from '../../json-helper';
import Encounter from './Encounter';
import EncounterClass from './EncounterClass';
import EncounterType from './EncounterType';
import Diagnosis from './Diagnosis';
import DetailedEncounter from './DetailedEncounter';

/**
 * Generated object factory for the cimi.encounter namespace.
 */
export default class CimiEncounterObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.encounter') {
      throw new Error(`Unsupported type in CimiEncounterObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Encounter': return Encounter.fromJSON(json);
    case 'EncounterClass': return EncounterClass.fromJSON(json);
    case 'EncounterType': return EncounterType.fromJSON(json);
    case 'Diagnosis': return Diagnosis.fromJSON(json);
    case 'DetailedEncounter': return DetailedEncounter.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiEncounterObjectFactory: ${type}`);
    }
  }
}
