import { setPropertiesFromJSON } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for cimi.entity.Group.
 * @extends EntityOrRole
 */
class Group extends EntityOrRole {

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
   * @returns {Group} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The cimi.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The cimi.entity.ActiveFlag
   * @returns {Group} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {Group} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Group} this.
   */
  withTitle(title) {
    this.title = title; return this;
  }

  /**
   * Get the Actual.
   * @returns {Actual} The cimi.entity.Actual
   */
  get actual() {
    return this._actual;
  }

  /**
   * Set the Actual.
   * This field/value is required.
   * @param {Actual} actual - The cimi.entity.Actual
   */
  set actual(actual) {
    this._actual = actual;
  }

  /**
   * Set the Actual and return 'this' for chaining.
   * This field/value is required.
   * @param {Actual} actual - The cimi.entity.Actual
   * @returns {Group} this.
   */
  withActual(actual) {
    this.actual = actual; return this;
  }

  /**
   * Get the GroupCharacteristic array.
   * @returns {Array<GroupCharacteristic>} The cimi.entity.GroupCharacteristic array
   */
  get groupCharacteristic() {
    return this._groupCharacteristic;
  }

  /**
   * Set the GroupCharacteristic array.
   * @param {Array<GroupCharacteristic>} groupCharacteristic - The cimi.entity.GroupCharacteristic array
   */
  set groupCharacteristic(groupCharacteristic) {
    this._groupCharacteristic = groupCharacteristic;
  }

  /**
   * Set the GroupCharacteristic array and return 'this' for chaining.
   * @param {Array<GroupCharacteristic>} groupCharacteristic - The cimi.entity.GroupCharacteristic array
   * @returns {Group} this.
   */
  withGroupCharacteristic(groupCharacteristic) {
    this.groupCharacteristic = groupCharacteristic; return this;
  }

  /**
   * Get the Member array.
   * @returns {Array<Member>} The cimi.entity.Member array
   */
  get member() {
    return this._member;
  }

  /**
   * Set the Member array.
   * @param {Array<Member>} member - The cimi.entity.Member array
   */
  set member(member) {
    this._member = member;
  }

  /**
   * Set the Member array and return 'this' for chaining.
   * @param {Array<Member>} member - The cimi.entity.Member array
   * @returns {Group} this.
   */
  withMember(member) {
    this.member = member; return this;
  }

  /**
   * Get the Count.
   * @returns {Count} The shr.core.Count
   */
  get count() {
    return this._count;
  }

  /**
   * Set the Count.
   * @param {Count} count - The shr.core.Count
   */
  set count(count) {
    this._count = count;
  }

  /**
   * Set the Count and return 'this' for chaining.
   * @param {Count} count - The shr.core.Count
   * @returns {Group} this.
   */
  withCount(count) {
    this.count = count; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Group class.
   * The JSON must be valid against the Group JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Group} An instance of Group populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Group();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Group class to a JSON object.
   * The JSON is expected to be valid against the Group JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Group' };
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.actual != null) {
      inst['Actual'] = typeof this.actual.toJSON === 'function' ? this.actual.toJSON() : this.actual;
    }
    if (this.groupCharacteristic != null) {
      inst['GroupCharacteristic'] = this.groupCharacteristic.map(f => f.toJSON());
    }
    if (this.member != null) {
      inst['Member'] = this.member.map(f => f.toJSON());
    }
    if (this.count != null) {
      inst['Count'] = typeof this.count.toJSON === 'function' ? this.count.toJSON() : this.count;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Group class to a FHIR object.
   * The FHIR is expected to be valid against the Group FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Group';
    if (this.activeFlag != null) {
      inst['active'] = typeof this.activeFlag.toFHIR === 'function' ? this.activeFlag.toFHIR() : this.activeFlag;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.actual != null) {
      inst['actual'] = typeof this.actual.toFHIR === 'function' ? this.actual.toFHIR() : this.actual;
    }
    if (this.title != null) {
      inst['name'] = typeof this.title.toFHIR === 'function' ? this.title.toFHIR() : this.title;
    }
    if (this.count != null) {
      inst['quantity'] = typeof this.count.toFHIR === 'function' ? this.count.toFHIR() : this.count;
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.groupCharacteristicCode != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['code'] = inst ['characteristic']['code'] || [];
      inst['characteristic']['code'].concat(this.groupCharacteristic.groupCharacteristicCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['value[x]'] = inst ['characteristic']['value[x]'] || [];
      inst['characteristic']['value[x]'].concat(this.groupCharacteristic.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.excludeFlag != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['exclude'] = inst ['characteristic']['exclude'] || [];
      inst['characteristic']['exclude'].concat(this.groupCharacteristic.excludeFlag.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.timePeriod != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['period'] = inst ['characteristic']['period'] || [];
      inst['characteristic']['period'].concat(this.groupCharacteristic.timePeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.member != null && this.member.patient != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['entity'] = inst ['member']['entity'] || [];
      inst['member']['entity'].concat(this.member.patient.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.member != null && this.member.participationPeriod != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['period'] = inst ['member']['period'] || [];
      inst['member']['period'].concat(this.member.participationPeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.member != null && this.member.activeFlag != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['inactive'] = inst ['member']['inactive'] || [];
      inst['member']['inactive'].concat(this.member.activeFlag.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default Group;
