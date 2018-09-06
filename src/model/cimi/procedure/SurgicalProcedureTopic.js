import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureTopic from './ProcedureTopic';

/**
 * Generated class for cimi.procedure.SurgicalProcedureTopic.
 * @extends ProcedureTopic
 */
class SurgicalProcedureTopic extends ProcedureTopic {

  /**
   * Get the DirectSite array.
   * @returns {Array<DirectSite>} The cimi.procedure.DirectSite array
   */
  get directSite() {
    return this._directSite;
  }

  /**
   * Set the DirectSite array.
   * @param {Array<DirectSite>} directSite - The cimi.procedure.DirectSite array
   */
  set directSite(directSite) {
    this._directSite = directSite;
  }

  /**
   * Set the DirectSite array and return 'this' for chaining.
   * @param {Array<DirectSite>} directSite - The cimi.procedure.DirectSite array
   * @returns {SurgicalProcedureTopic} this.
   */
  withDirectSite(directSite) {
    this.directSite = directSite; return this;
  }

  /**
   * Get the DirectSiteCode array.
   * @returns {Array<DirectSiteCode>} The cimi.procedure.DirectSiteCode array
   */
  get directSiteCode() {
    return this._directSiteCode;
  }

  /**
   * Set the DirectSiteCode array.
   * @param {Array<DirectSiteCode>} directSiteCode - The cimi.procedure.DirectSiteCode array
   */
  set directSiteCode(directSiteCode) {
    this._directSiteCode = directSiteCode;
  }

  /**
   * Set the DirectSiteCode array and return 'this' for chaining.
   * @param {Array<DirectSiteCode>} directSiteCode - The cimi.procedure.DirectSiteCode array
   * @returns {SurgicalProcedureTopic} this.
   */
  withDirectSiteCode(directSiteCode) {
    this.directSiteCode = directSiteCode; return this;
  }

  /**
   * Get the IndirectSite array.
   * @returns {Array<IndirectSite>} The cimi.procedure.IndirectSite array
   */
  get indirectSite() {
    return this._indirectSite;
  }

  /**
   * Set the IndirectSite array.
   * @param {Array<IndirectSite>} indirectSite - The cimi.procedure.IndirectSite array
   */
  set indirectSite(indirectSite) {
    this._indirectSite = indirectSite;
  }

  /**
   * Set the IndirectSite array and return 'this' for chaining.
   * @param {Array<IndirectSite>} indirectSite - The cimi.procedure.IndirectSite array
   * @returns {SurgicalProcedureTopic} this.
   */
  withIndirectSite(indirectSite) {
    this.indirectSite = indirectSite; return this;
  }

  /**
   * Get the IndirectSiteCode array.
   * @returns {Array<IndirectSiteCode>} The cimi.procedure.IndirectSiteCode array
   */
  get indirectSiteCode() {
    return this._indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The cimi.procedure.IndirectSiteCode array
   */
  set indirectSiteCode(indirectSiteCode) {
    this._indirectSiteCode = indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array and return 'this' for chaining.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The cimi.procedure.IndirectSiteCode array
   * @returns {SurgicalProcedureTopic} this.
   */
  withIndirectSiteCode(indirectSiteCode) {
    this.indirectSiteCode = indirectSiteCode; return this;
  }

  /**
   * Get the SurgicalApproach array.
   * @returns {Array<SurgicalApproach>} The cimi.procedure.SurgicalApproach array
   */
  get surgicalApproach() {
    return this._surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array.
   * @param {Array<SurgicalApproach>} surgicalApproach - The cimi.procedure.SurgicalApproach array
   */
  set surgicalApproach(surgicalApproach) {
    this._surgicalApproach = surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array and return 'this' for chaining.
   * @param {Array<SurgicalApproach>} surgicalApproach - The cimi.procedure.SurgicalApproach array
   * @returns {SurgicalProcedureTopic} this.
   */
  withSurgicalApproach(surgicalApproach) {
    this.surgicalApproach = surgicalApproach; return this;
  }

  /**
   * Get the Access array.
   * @returns {Array<Access>} The cimi.procedure.Access array
   */
  get access() {
    return this._access;
  }

  /**
   * Set the Access array.
   * @param {Array<Access>} access - The cimi.procedure.Access array
   */
  set access(access) {
    this._access = access;
  }

  /**
   * Set the Access array and return 'this' for chaining.
   * @param {Array<Access>} access - The cimi.procedure.Access array
   * @returns {SurgicalProcedureTopic} this.
   */
  withAccess(access) {
    this.access = access; return this;
  }

  /**
   * Get the UsingDevice array.
   * @returns {Array<UsingDevice>} The cimi.procedure.UsingDevice array
   */
  get usingDevice() {
    return this._usingDevice;
  }

  /**
   * Set the UsingDevice array.
   * @param {Array<UsingDevice>} usingDevice - The cimi.procedure.UsingDevice array
   */
  set usingDevice(usingDevice) {
    this._usingDevice = usingDevice;
  }

  /**
   * Set the UsingDevice array and return 'this' for chaining.
   * @param {Array<UsingDevice>} usingDevice - The cimi.procedure.UsingDevice array
   * @returns {SurgicalProcedureTopic} this.
   */
  withUsingDevice(usingDevice) {
    this.usingDevice = usingDevice; return this;
  }

  /**
   * Get the UsingDeviceCode array.
   * @returns {Array<UsingDeviceCode>} The cimi.procedure.UsingDeviceCode array
   */
  get usingDeviceCode() {
    return this._usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The cimi.procedure.UsingDeviceCode array
   */
  set usingDeviceCode(usingDeviceCode) {
    this._usingDeviceCode = usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The cimi.procedure.UsingDeviceCode array
   * @returns {SurgicalProcedureTopic} this.
   */
  withUsingDeviceCode(usingDeviceCode) {
    this.usingDeviceCode = usingDeviceCode; return this;
  }

  /**
   * Get the UsingAccessDevice array.
   * @returns {Array<UsingAccessDevice>} The cimi.procedure.UsingAccessDevice array
   */
  get usingAccessDevice() {
    return this._usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The cimi.procedure.UsingAccessDevice array
   */
  set usingAccessDevice(usingAccessDevice) {
    this._usingAccessDevice = usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array and return 'this' for chaining.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The cimi.procedure.UsingAccessDevice array
   * @returns {SurgicalProcedureTopic} this.
   */
  withUsingAccessDevice(usingAccessDevice) {
    this.usingAccessDevice = usingAccessDevice; return this;
  }

  /**
   * Get the UsingAccessDeviceCode array.
   * @returns {Array<UsingAccessDeviceCode>} The cimi.procedure.UsingAccessDeviceCode array
   */
  get usingAccessDeviceCode() {
    return this._usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The cimi.procedure.UsingAccessDeviceCode array
   */
  set usingAccessDeviceCode(usingAccessDeviceCode) {
    this._usingAccessDeviceCode = usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The cimi.procedure.UsingAccessDeviceCode array
   * @returns {SurgicalProcedureTopic} this.
   */
  withUsingAccessDeviceCode(usingAccessDeviceCode) {
    this.usingAccessDeviceCode = usingAccessDeviceCode; return this;
  }

  /**
   * Get the IndirectDevice array.
   * @returns {Array<IndirectDevice>} The cimi.procedure.IndirectDevice array
   */
  get indirectDevice() {
    return this._indirectDevice;
  }

  /**
   * Set the IndirectDevice array.
   * @param {Array<IndirectDevice>} indirectDevice - The cimi.procedure.IndirectDevice array
   */
  set indirectDevice(indirectDevice) {
    this._indirectDevice = indirectDevice;
  }

  /**
   * Set the IndirectDevice array and return 'this' for chaining.
   * @param {Array<IndirectDevice>} indirectDevice - The cimi.procedure.IndirectDevice array
   * @returns {SurgicalProcedureTopic} this.
   */
  withIndirectDevice(indirectDevice) {
    this.indirectDevice = indirectDevice; return this;
  }

  /**
   * Get the IndirectDeviceCode array.
   * @returns {Array<IndirectDeviceCode>} The cimi.procedure.IndirectDeviceCode array
   */
  get indirectDeviceCode() {
    return this._indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The cimi.procedure.IndirectDeviceCode array
   */
  set indirectDeviceCode(indirectDeviceCode) {
    this._indirectDeviceCode = indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array and return 'this' for chaining.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The cimi.procedure.IndirectDeviceCode array
   * @returns {SurgicalProcedureTopic} this.
   */
  withIndirectDeviceCode(indirectDeviceCode) {
    this.indirectDeviceCode = indirectDeviceCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedureTopic class.
   * The JSON must be valid against the SurgicalProcedureTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedureTopic} An instance of SurgicalProcedureTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedureTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedureTopic class to a JSON object.
   * The JSON is expected to be valid against the SurgicalProcedureTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/procedure/SurgicalProcedureTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.reason != null) {
      inst['Reason'] = typeof this.reason.toJSON === 'function' ? this.reason.toJSON() : this.reason;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.inputFinding != null) {
      inst['InputFinding'] = this.inputFinding.map(f => f.toJSON());
    }
    if (this.indication != null) {
      inst['Indication'] = this.indication.map(f => f.toJSON());
    }
    if (this.device != null) {
      inst['Device'] = this.device.map(f => f.toJSON());
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.directSite != null) {
      inst['DirectSite'] = this.directSite.map(f => f.toJSON());
    }
    if (this.directSiteCode != null) {
      inst['DirectSiteCode'] = this.directSiteCode.map(f => f.toJSON());
    }
    if (this.indirectSite != null) {
      inst['IndirectSite'] = this.indirectSite.map(f => f.toJSON());
    }
    if (this.indirectSiteCode != null) {
      inst['IndirectSiteCode'] = this.indirectSiteCode.map(f => f.toJSON());
    }
    if (this.surgicalApproach != null) {
      inst['SurgicalApproach'] = this.surgicalApproach.map(f => f.toJSON());
    }
    if (this.access != null) {
      inst['Access'] = this.access.map(f => f.toJSON());
    }
    if (this.usingDevice != null) {
      inst['UsingDevice'] = this.usingDevice.map(f => f.toJSON());
    }
    if (this.usingDeviceCode != null) {
      inst['UsingDeviceCode'] = this.usingDeviceCode.map(f => f.toJSON());
    }
    if (this.usingAccessDevice != null) {
      inst['UsingAccessDevice'] = this.usingAccessDevice.map(f => f.toJSON());
    }
    if (this.usingAccessDeviceCode != null) {
      inst['UsingAccessDeviceCode'] = this.usingAccessDeviceCode.map(f => f.toJSON());
    }
    if (this.indirectDevice != null) {
      inst['IndirectDevice'] = this.indirectDevice.map(f => f.toJSON());
    }
    if (this.indirectDeviceCode != null) {
      inst['IndirectDeviceCode'] = this.indirectDeviceCode.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedureTopic class to a FHIR object.
   * The FHIR is expected to be valid against the SurgicalProcedureTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default SurgicalProcedureTopic;
