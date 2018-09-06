import { getNamespaceAndName } from '../../json-helper';
import Status from './Status';
import Annotation from './Annotation';
import Author from './Author';
import SignatureType from './SignatureType';
import Signature from './Signature';
import Signatory from './Signatory';
import OnBehalfOf from './OnBehalfOf';
import RouteIntoBody from './RouteIntoBody';
import AnatomicalLocation from './AnatomicalLocation';
import Laterality from './Laterality';
import AnatomicalDirection from './AnatomicalDirection';
import Identifier from './Identifier';
import Issuer from './Issuer';
import PartOf from './PartOf';
import TermMapping from './TermMapping';
import Match from './Match';
import Name from './Name';
import NameAsText from './NameAsText';
import PersonName from './PersonName';
import PreferredFlag from './PreferredFlag';
import Prefix from './Prefix';
import GivenName from './GivenName';
import MiddleName from './MiddleName';
import FamilyName from './FamilyName';
import Suffix from './Suffix';

/**
 * Generated object factory for the cimi.element namespace.
 */
export default class CimiElementObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'cimi.element') {
      throw new Error(`Unsupported type in CimiElementObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Status': return Status.fromJSON(json);
    case 'Annotation': return Annotation.fromJSON(json);
    case 'Author': return Author.fromJSON(json);
    case 'SignatureType': return SignatureType.fromJSON(json);
    case 'Signature': return Signature.fromJSON(json);
    case 'Signatory': return Signatory.fromJSON(json);
    case 'OnBehalfOf': return OnBehalfOf.fromJSON(json);
    case 'RouteIntoBody': return RouteIntoBody.fromJSON(json);
    case 'AnatomicalLocation': return AnatomicalLocation.fromJSON(json);
    case 'Laterality': return Laterality.fromJSON(json);
    case 'AnatomicalDirection': return AnatomicalDirection.fromJSON(json);
    case 'Identifier': return Identifier.fromJSON(json);
    case 'Issuer': return Issuer.fromJSON(json);
    case 'PartOf': return PartOf.fromJSON(json);
    case 'TermMapping': return TermMapping.fromJSON(json);
    case 'Match': return Match.fromJSON(json);
    case 'Name': return Name.fromJSON(json);
    case 'NameAsText': return NameAsText.fromJSON(json);
    case 'PersonName': return PersonName.fromJSON(json);
    case 'PreferredFlag': return PreferredFlag.fromJSON(json);
    case 'Prefix': return Prefix.fromJSON(json);
    case 'GivenName': return GivenName.fromJSON(json);
    case 'MiddleName': return MiddleName.fromJSON(json);
    case 'FamilyName': return FamilyName.fromJSON(json);
    case 'Suffix': return Suffix.fromJSON(json);
    default: throw new Error(`Unsupported type in CimiElementObjectFactory: ${type}`);
    }
  }
}
