import { getNamespaceAndName } from '../../json-helper';
import Locatable from './Locatable';
import Independent from './Independent';
import Content from './Content';
import InformationEntry from './InformationEntry';
import NonIndependent from './NonIndependent';
import DataType from './DataType';
import PersonOfRecord from './PersonOfRecord';
import RelationshipToPersonOfRecord from './RelationshipToPersonOfRecord';
import RecordStatus from './RecordStatus';
import Recorded from './Recorded';
import Signed from './Signed';
import Cosigned from './Cosigned';
import Verified from './Verified';
import Attribution from './Attribution';
import RecordedOn from './RecordedOn';

/**
 * Generated object factory for the cimi.core namespace.
 */
export default class CimiCoreObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.core') {
      throw new Error(`Unsupported type in CimiCoreObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Locatable': return Locatable.fromJSON(json);
    case 'Independent': return Independent.fromJSON(json);
    case 'Content': return Content.fromJSON(json);
    case 'InformationEntry': return InformationEntry.fromJSON(json);
    case 'NonIndependent': return NonIndependent.fromJSON(json);
    case 'DataType': return DataType.fromJSON(json);
    case 'PersonOfRecord': return PersonOfRecord.fromJSON(json);
    case 'RelationshipToPersonOfRecord': return RelationshipToPersonOfRecord.fromJSON(json);
    case 'RecordStatus': return RecordStatus.fromJSON(json);
    case 'Recorded': return Recorded.fromJSON(json);
    case 'Signed': return Signed.fromJSON(json);
    case 'Cosigned': return Cosigned.fromJSON(json);
    case 'Verified': return Verified.fromJSON(json);
    case 'Attribution': return Attribution.fromJSON(json);
    case 'RecordedOn': return RecordedOn.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiCoreObjectFactory: ${type}`);
    }
  }
}
