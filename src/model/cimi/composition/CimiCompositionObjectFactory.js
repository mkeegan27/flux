import { getNamespaceAndName } from '../../json-helper';
import Composition from './Composition';
import Section from './Section';

/**
 * Generated object factory for the cimi.composition namespace.
 */
export default class CimiCompositionObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.composition') {
      throw new Error(`Unsupported type in CimiCompositionObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Composition': return Composition.fromJSON(json);
    case 'Section': return Section.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiCompositionObjectFactory: ${type}`);
    }
  }
}
