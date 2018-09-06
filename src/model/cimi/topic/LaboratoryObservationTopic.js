import { setPropertiesFromJSON } from '../../json-helper';

import ObservationTopic from './ObservationTopic';

/**
 * Generated class for cimi.topic.LaboratoryObservationTopic.
 * @extends ObservationTopic
 */
class LaboratoryObservationTopic extends ObservationTopic {

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {LaboratoryObservationTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   * @returns {LaboratoryObservationTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the cimi.entity.Specimen reference.
   * @returns {Reference} The cimi.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference.
   * This field/value is required.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   * @returns {LaboratoryObservationTopic} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the DiagnosticService array.
   * @returns {Array<DiagnosticService>} The cimi.topic.DiagnosticService array
   */
  get diagnosticService() {
    return this._diagnosticService;
  }

  /**
   * Set the DiagnosticService array.
   * @param {Array<DiagnosticService>} diagnosticService - The cimi.topic.DiagnosticService array
   */
  set diagnosticService(diagnosticService) {
    this._diagnosticService = diagnosticService;
  }

  /**
   * Set the DiagnosticService array and return 'this' for chaining.
   * @param {Array<DiagnosticService>} diagnosticService - The cimi.topic.DiagnosticService array
   * @returns {LaboratoryObservationTopic} this.
   */
  withDiagnosticService(diagnosticService) {
    this.diagnosticService = diagnosticService; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryObservationTopic class.
   * The JSON must be valid against the LaboratoryObservationTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryObservationTopic} An instance of LaboratoryObservationTopic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryObservationTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryObservationTopic class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryObservationTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/cimi/topic/LaboratoryObservationTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.evaluationComponent != null) {
      inst['EvaluationComponent'] = this.evaluationComponent.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.diagnosticService != null) {
      inst['DiagnosticService'] = this.diagnosticService.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryObservationTopic class to a FHIR object.
   * The FHIR is expected to be valid against the LaboratoryObservationTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }
}
export default LaboratoryObservationTopic;
