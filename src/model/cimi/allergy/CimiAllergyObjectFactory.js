import { getNamespaceAndName } from '../../json-helper';
import SubstanceCategory from './SubstanceCategory';
import AdverseSensitivityTopic from './AdverseSensitivityTopic';
import AllergenIrritant from './AllergenIrritant';
import AdverseSensitivityPresenceContext from './AdverseSensitivityPresenceContext';
import MostRecentOccurrenceTime from './MostRecentOccurrenceTime';
import AdverseSensitivityToSubstanceStatement from './AdverseSensitivityToSubstanceStatement';
import NoAdverseSensitivityToSubstanceStatement from './NoAdverseSensitivityToSubstanceStatement';
import NoKnownDrugAllergyStatement from './NoKnownDrugAllergyStatement';
import NoKnownFoodAllergyStatement from './NoKnownFoodAllergyStatement';
import NoKnownEvironmentalAllergyStatement from './NoKnownEvironmentalAllergyStatement';
import NoKnownAllergyStatement from './NoKnownAllergyStatement';

/**
 * Generated object factory for the cimi.allergy namespace.
 */
export default class CimiAllergyObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.allergy') {
      throw new Error(`Unsupported type in CimiAllergyObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'SubstanceCategory': return SubstanceCategory.fromJSON(json);
    case 'AdverseSensitivityTopic': return AdverseSensitivityTopic.fromJSON(json);
    case 'AllergenIrritant': return AllergenIrritant.fromJSON(json);
    case 'AdverseSensitivityPresenceContext': return AdverseSensitivityPresenceContext.fromJSON(json);
    case 'MostRecentOccurrenceTime': return MostRecentOccurrenceTime.fromJSON(json);
    case 'AdverseSensitivityToSubstanceStatement': return AdverseSensitivityToSubstanceStatement.fromJSON(json);
    case 'NoAdverseSensitivityToSubstanceStatement': return NoAdverseSensitivityToSubstanceStatement.fromJSON(json);
    case 'NoKnownDrugAllergyStatement': return NoKnownDrugAllergyStatement.fromJSON(json);
    case 'NoKnownFoodAllergyStatement': return NoKnownFoodAllergyStatement.fromJSON(json);
    case 'NoKnownEvironmentalAllergyStatement': return NoKnownEvironmentalAllergyStatement.fromJSON(json);
    case 'NoKnownAllergyStatement': return NoKnownAllergyStatement.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiAllergyObjectFactory: ${type}`);
    }
  }
}
