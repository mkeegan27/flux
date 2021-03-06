import FluxCondition from './FluxCondition';
import Injury from '../shr/condition/Injury';

class FluxInjury extends FluxCondition {
    constructor(json) {
        super();
        this._condition = Injury.fromJSON(json);
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxInjury;