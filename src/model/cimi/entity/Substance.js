import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for cimi.entity.Substance.
 * @extends Entity
 */
class Substance extends Entity {

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
   * @returns {Substance} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {Substance} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {Substance} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the ActiveFlagAsaCodeableConcept.
   * @returns {ActiveFlagAsaCodeableConcept} The cimi.entity.ActiveFlagAsaCodeableConcept
   */
  get activeFlagAsaCodeableConcept() {
    return this._activeFlagAsaCodeableConcept;
  }

  /**
   * Set the ActiveFlagAsaCodeableConcept.
   * @param {ActiveFlagAsaCodeableConcept} activeFlagAsaCodeableConcept - The cimi.entity.ActiveFlagAsaCodeableConcept
   */
  set activeFlagAsaCodeableConcept(activeFlagAsaCodeableConcept) {
    this._activeFlagAsaCodeableConcept = activeFlagAsaCodeableConcept;
  }

  /**
   * Set the ActiveFlagAsaCodeableConcept and return 'this' for chaining.
   * @param {ActiveFlagAsaCodeableConcept} activeFlagAsaCodeableConcept - The cimi.entity.ActiveFlagAsaCodeableConcept
   * @returns {Substance} this.
   */
  withActiveFlagAsaCodeableConcept(activeFlagAsaCodeableConcept) {
    this.activeFlagAsaCodeableConcept = activeFlagAsaCodeableConcept; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {Substance} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the Ingredient array.
   * @returns {Array<Ingredient>} The cimi.entity.Ingredient array
   */
  get ingredient() {
    return this._ingredient;
  }

  /**
   * Set the Ingredient array.
   * @param {Array<Ingredient>} ingredient - The cimi.entity.Ingredient array
   */
  set ingredient(ingredient) {
    this._ingredient = ingredient;
  }

  /**
   * Set the Ingredient array and return 'this' for chaining.
   * @param {Array<Ingredient>} ingredient - The cimi.entity.Ingredient array
   * @returns {Substance} this.
   */
  withIngredient(ingredient) {
    this.ingredient = ingredient; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Substance class.
   * The JSON must be valid against the Substance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Substance} An instance of Substance populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Substance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Substance class to a JSON object.
   * The JSON is expected to be valid against the Substance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/cimi/entity/Substance' };
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.activeFlagAsaCodeableConcept != null) {
      inst['ActiveFlagAsaCodeableConcept'] = typeof this.activeFlagAsaCodeableConcept.toJSON === 'function' ? this.activeFlagAsaCodeableConcept.toJSON() : this.activeFlagAsaCodeableConcept;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.ingredient != null) {
      inst['Ingredient'] = this.ingredient.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Substance class to a FHIR object.
   * The FHIR is expected to be valid against the Substance FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Substance';
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.activeFlagAsaCodeableConcept != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.activeFlagAsaCodeableConcept.toFHIR(true));
    }
    if (this.details != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
    }
    if (this.type != null) {
      inst['code'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.ingredient != null) {
      inst['ingredient'] = inst ['ingredient'] || [];
      inst['ingredient'].concat(this.ingredient.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.ingredient != null && this.ingredient.ingredientAmount != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['quantity'] = inst ['ingredient']['quantity'] || [];
      inst['ingredient']['quantity'].concat(this.ingredient.ingredientAmount.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.ingredient != null && this.ingredient.codeableConcept != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['substance[x]'] = inst ['ingredient']['substance[x]'] || [];
      inst['ingredient']['substance[x]'].concat(this.ingredient.codeableConcept.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/cimi-entity-Substance-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Substance;
