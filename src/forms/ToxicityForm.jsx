// React imports
import React, { Component } from 'react';
// material-ui
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
// Libraries
import toxicityLookup from '../../lib/toxicity_lookup';
// Import Lodash libraries
import Lang from 'lodash'
import Array from 'lodash'
// Styling
import './ToxicityForm.css';

class ToxicityForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        gradeOptions: toxicityLookup.getGradeOptions(),
        adverseEventOptions: toxicityLookup.getAdverseEventOptions(),
        dataSourceConfig: {
          text: 'name',
          value: 'name',
        },
        searchText: '',
        potentialToxicity: null
      };
  }

  /* 
   * Update potential toxicity value
   */
  updatePotentialToxicity = (newToxicity) => { 
    this.setState({ 
      potentialToxicity: newToxicity
    })
  }

  /* 
   * Reset potential toxicity 
   */
  resetPotentialToxicity = () => { 
    this.setState({
      potentialToxicity: null,
      searchText: ""
    })
  }

  /* 
   * Add potential toxicity to parent's list of toxicities 
   */
  addToxicity = () => {
    const oldToxicities = Lang.clone(this.props.toxicity);
    // Only add potentialToxicity if value is non-null
    if(!Lang.isNull(this.state.potentialToxicity)) {
      if (!Lang.isUndefined(this.state.potentialToxicity.grade) && !Lang.isUndefined(this.state.potentialToxicity.adverseEvent)) {
        oldToxicities.push(Lang.clone(this.state.potentialToxicity))
        this.props.onToxicityUpdate(oldToxicities);
        this.resetPotentialToxicity();        
      }
    } 
  }

  /* 
   * Remove most recent tox from parent's list of toxicities 
   */
  removeCurrentToxicity = () => {
    const oldToxicities = Lang.clone(this.props.toxicity);
    // Only remove last value if oldToxicities is non-empty
    if(!Lang.isEmpty(oldToxicities)) {
      if(Array.findIndex(oldToxicities, this.state.potentialToxicity) !== -1) { 
        Array.remove(oldToxicities, this.state.potentialToxicity);
        this.props.onToxicityUpdate(oldToxicities);        
        this.resetPotentialToxicity();        
      }
    } 
  }

  /* 
   * Changes the potential toxicity to the provided value
   */
  changePotentialToxicity = (newPotentialToxicity) => { 
    this.setState({ 
      potentialToxicity: newPotentialToxicity,
      searchText: newPotentialToxicity.adverseEvent
    });
  }

  /* 
   * When a valid grade is selected, update potential toxicity 
   */
  handleGradeSelecion = (e, i, payload) => {
    e.preventDefault();
    const newGrade = payload; 
    console.log(`ToxicityForm.handleGradeSelecion Grade #${i} ${newGrade}`);
    let newToxicity;
    if(Lang.isNull(this.state.potentialToxicity)) { 
      newToxicity = {};
    } else { 
      newToxicity = { ...this.state.potentialToxicity}; 
    }
    newToxicity["grade"] = newGrade;
    this.updatePotentialToxicity(newToxicity);
  }

  /* 
   * When a valid adverse event is selected, update potential toxicity 
   */
  handleAdverseEventSelection = (newAdverseEvent) => {
    console.log(`ToxicityForm.handleAdverseEventSelecion AdverseEvent ${newAdverseEvent}`);
    let newToxicity 
    if(Lang.isNull(this.state.potentialToxicity)) { 
      newToxicity = {};
    } else { 
      newToxicity = { ...this.state.potentialToxicity}; 
    }
    newToxicity["adverseEvent"] = newAdverseEvent;
    // Make sure grade is possible with given new tox
    const potentialGrade = (toxicityLookup.isValidGradeForAdverseEvent(newToxicity.grade, newAdverseEvent)) ? newToxicity.grade : null;
    if(Lang.isNull(potentialGrade)) { 
      delete newToxicity.grade;
    }
    this.updatePotentialToxicity(newToxicity);
  }

  /* 
   * When new text is available for AE selection, update search text 
   *  and also update potential toxicity when valid
   */
  handleUpdateAdverseEventInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
    if(toxicityLookup.isValidAdverseEvent(searchText)) { 
      this.handleAdverseEventSelection(searchText)
    }
  }

  renderGradeMenuItem = (grade) => { 
    return (
      <MenuItem 
        key={grade.name} 
        value={grade.name} 
        primaryText={grade.name} 
      />
    ) 
  }

  render() {
    let potentialToxicity = Lang.isNull(this.state.potentialToxicity) ? {} : this.state.potentialToxicity;
    
    const potentialGrade = toxicityLookup.isValidGradeForAdverseEvent(potentialToxicity.grade, potentialToxicity.adverseEvent) ? potentialToxicity.grade : null;
    const cannotAddCurrent = Lang.isEmpty(potentialToxicity) || Lang.isUndefined(potentialToxicity.grade) || Lang.isUndefined(potentialToxicity.adverseEvent);
    const cannotRemove = Lang.isEmpty(potentialToxicity) || (Array.findIndex(this.props.toxicity, potentialToxicity) === -1)

    return (
        <div>
            <h1>Patient Toxicity</h1>
            <Divider className="divider" />

            <h4>Adverse Event</h4>
            <AutoComplete
              floatingLabelText="Search through adverse events"
              maxSearchResults={7}
              filter={AutoComplete.fuzzyFilter}
              openOnFocus={true}
              fullWidth={true}

              searchText={this.state.searchText}
              onUpdateInput={this.handleUpdateAdverseEventInput}

              dataSource={this.state.adverseEventOptions}
              dataSourceConfig={this.state.dataSourceConfig}
            />

            <h4>Toxicity Grade</h4>
            <SelectField
              floatingLabelText="Grade"
              // Value should be potential grade, assuming it's valid
              value={potentialGrade}
              onChange={this.handleGradeSelecion}
            >
              {this.state.gradeOptions.map((grade, i) => {
                  if(Lang.isUndefined(potentialToxicity.adverseEvent)) { 
                      return this.renderGradeMenuItem(grade)                      
                  } else { 
                      if (toxicityLookup.isValidGradeForAdverseEvent(grade.name, potentialToxicity.adverseEvent)) {
                        return this.renderGradeMenuItem(grade);
                      } else {
                        // return nothing -- don't render this as an option
                        return null;
                      }
                  }
              })}
            </SelectField>

            <div id="bottom-buttons">
              <RaisedButton
                  className="toxicity-button"
                  label="Add Current"
                  disabled={cannotAddCurrent}
                  onClick={(e) => this.addToxicity(e)}
              />
              <RaisedButton
                  className="toxicity-button"
                  label="Remove Current"
                  disabled={cannotRemove}
                  onClick={(e) => this.removeCurrentToxicity(e)}
              />
            </div>
            <Divider/>
            <h4>Current Toxicities</h4>
            <List>
              {this.props.toxicity.map((toxElem, i) => { 
                return(
                    <ListItem 
                      primaryText={this.props.getToxAsString(toxElem)} 
                      key={i}
                      onTouchTap={ (e) => {
                        this.changePotentialToxicity(toxElem)
                      }}/>
                  )
              })}
            </List>
        </div>
    );
  }
}

export default ToxicityForm;

/*
function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}*/
