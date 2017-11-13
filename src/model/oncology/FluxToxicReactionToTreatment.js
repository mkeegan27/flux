import AdverseEvent from '../shr/adverse/AdverseEvent';
import ToxicReactionToTreatment from '../shr/oncology/ToxicReactionToTreatment';
import AdverseEventGrade from '../shr/adverse/AdverseEventGrade';
import CauseCategory from '../shr/adverse/CauseCategory';
import CodeableConcept from '../shr/core/CodeableConcept';
import lookup from '../../lib/toxicreactiontotreatment_lookup.jsx';

// FluxToxicReactionToTreatment class to hide codeableconcepts
class FluxToxicReactionToTreatment extends ToxicReactionToTreatment {
    constructor(json) {
        super(json);

        if(!json) {
            let adverseEvent = new AdverseEvent();
            adverseEvent.value = new CodeableConcept();
            this._adverseEvent = adverseEvent;
            let adverseEventGrade = new AdverseEventGrade();
            adverseEventGrade.value = new CodeableConcept();
            this._adverseEvent._adverseEventGrade = adverseEventGrade;
            let causeCategory = new CauseCategory();
            causeCategory.value = new CodeableConcept();
            this._adverseEvent._causeCategory = causeCategory;
        }
    }

    /*
     *  Getter for adverseEvent
     *  This will return the displayText string from CodeableConcept value
     */
    get adverseEvent() {
        return this._adverseEvent.value.coding[0].displayText.value;
    }

    /*
     *  Setter for adverseEvent
     *  This function is expecting an adverseEvent string
     *  This function will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set adverseEvent(adverseEvent) {
        this._adverseEvent.value = lookup.getAdverseEventCodeableConcept(adverseEvent);
    }

    /*
     *  Getter for adverseEventGrade
     *  This will return the displayText string from adverseEventGrade value
     */
    get adverseEventGrade() {
        return this._adverseEvent.adverseEventGrade.value.coding[0].displayText.value;
    }

    /*
     *  Setter for adverseEventGrade
     *  This function is expecting an adverseEventGrade string
     *  This function will lookup the corresponding coding/codesystem and set the _adverseEventGrade property
     */
    set adverseEventGrade(grade) {
        let adverseEventGrade = new AdverseEventGrade();
        adverseEventGrade.value = lookup.getAdverseEventGradeCodeableConcept(grade);
        this._adverseEvent.adverseEventGrade = adverseEventGrade;
    }

    /*
     *  Getter for causeCategory
     *  This will return the displayText string from causeCategory value
     */
    get causeCategory() {
        return this._adverseEvent.causeCategory.value.coding[0].displayText.value;
    }

    /*
     *  Setter for causeCategory
     *  This function is expecting an causeCategory string
     *  This function will lookup the corresponding coding/codesystem and set the _causeCategory property
     */
    set causeCategory(causeCategory) {
        let c = new CauseCategory();
        c.value = lookup.getAttributionCodeableConcept(causeCategory);
        this._adverseEvent.causeCategory = c; 
    }
}

export default FluxToxicReactionToTreatment;