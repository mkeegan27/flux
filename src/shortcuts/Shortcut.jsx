// React Imports:
import React from 'react';

class Shortcut {
    constructor() {
        if (new.target === Shortcut) {
            throw new TypeError("Cannot construct Shortcut instances directly");
        }
    }

    getAsString () { 
        return "#null"; 
    }

    getForm () { 
        return (<h2>No additional values for current shortcut</h2>);
    }
}

export default Shortcut;
