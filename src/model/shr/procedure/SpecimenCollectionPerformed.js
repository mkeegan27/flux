import { setPropertiesFromJSON } from '../../json-helper';

import SpecimenCollectionAction from './SpecimenCollectionAction';

/**
 * Generated class for shr.procedure.SpecimenCollectionPerformed.
 * @extends SpecimenCollectionAction
 */
class SpecimenCollectionPerformed extends SpecimenCollectionAction {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {SpecimenCollectionPerformed} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PerformedContext.
   * @returns {PerformedContext} The shr.action.PerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the PerformedContext.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the PerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   * @returns {SpecimenCollectionPerformed} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Get the BodySite array.
   * @returns {Array<BodySite>} The shr.entity.BodySite array
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite array.
   * @param {Array<BodySite>} bodySite - The shr.entity.BodySite array
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite array and return 'this' for chaining.
   * @param {Array<BodySite>} bodySite - The shr.entity.BodySite array
   * @returns {SpecimenCollectionPerformed} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionPerformed class.
   * The JSON must be valid against the SpecimenCollectionPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionPerformed} An instance of SpecimenCollectionPerformed populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SpecimenCollectionPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionPerformed class to a JSON object.
   * The JSON is expected to be valid against the SpecimenCollectionPerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/SpecimenCollectionPerformed' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.bodySite != null) {
      inst['BodySite'] = this.bodySite.map(f => f.toJSON());
    }
    if (this.associatedStudy != null) {
      inst['AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.amountOrSize != null) {
      inst['AmountOrSize'] = this.amountOrSize.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionPerformed class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenCollectionPerformed FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.subject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.subject.toFHIR(true));
    }
    if (this.bodySite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.bodySite.toFHIR(true));
    }
    if (this.associatedStudy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.associatedStudy.toFHIR(true));
    }
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.partOf.toFHIR(true));
    }
    if (this.annotation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.annotation.toFHIR(true));
    }
    if (this.amountOrSize != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.amountOrSize.toFHIR(true));
    }
    return inst;
  }
}
export default SpecimenCollectionPerformed;
