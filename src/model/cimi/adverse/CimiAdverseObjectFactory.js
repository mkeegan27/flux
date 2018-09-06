import { getNamespaceAndName } from '../../json-helper';
import Seriousness from './Seriousness';
import AdverseEventEntry from './AdverseEventEntry';
import CausalAttribution from './CausalAttribution';
import CauseCategory from './CauseCategory';
import ActionTaken from './ActionTaken';
import AssociatedStudy from './AssociatedStudy';
import AdverseReactionTopic from './AdverseReactionTopic';
import Manifestation from './Manifestation';
import AdverseReactionPresenceStatement from './AdverseReactionPresenceStatement';
import ToxicEventEntry from './ToxicEventEntry';

/**
 * Generated object factory for the cimi.adverse namespace.
 */
export default class CimiAdverseObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.adverse') {
      throw new Error(`Unsupported type in CimiAdverseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Seriousness': return Seriousness.fromJSON(json);
    case 'AdverseEventEntry': return AdverseEventEntry.fromJSON(json);
    case 'CausalAttribution': return CausalAttribution.fromJSON(json);
    case 'CauseCategory': return CauseCategory.fromJSON(json);
    case 'ActionTaken': return ActionTaken.fromJSON(json);
    case 'AssociatedStudy': return AssociatedStudy.fromJSON(json);
    case 'AdverseReactionTopic': return AdverseReactionTopic.fromJSON(json);
    case 'Manifestation': return Manifestation.fromJSON(json);
    case 'AdverseReactionPresenceStatement': return AdverseReactionPresenceStatement.fromJSON(json);
    case 'ToxicEventEntry': return ToxicEventEntry.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiAdverseObjectFactory: ${type}`);
    }
  }
}
