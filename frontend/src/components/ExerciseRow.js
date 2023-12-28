import React from 'react';
import textContent from '../../textContent';
import TimeRadioGroup from './TimeRadioGroup';
import CollapsibleButton from './CollapsibleButton';
import DescriptionField from './DescriptionField';
import LinkField from './LinkField';
import InputField from './InputField';
import SelectType from './SelectType';
import AddRemoveButtons from './AddRemoveButtons';


const ExerciseRow = ({ exercise, index, handleChange, onRemove, onAdd, }) => {

  const typeOptions = textContent.typeOptions;
  const timeChoices = textContent.timeChoices;
  const timeUnit = textContent.timeUnit;


  const handleInput = (event) => {
    // Handle input logic
  };
  const handleFocus = (event) => {
    console.log('Input field focused!');
  };

  return (
    <div className="exercise_form">
      <div className={`stripe-container stripe-${index}`}>
        <div className="stripe-and-collapsible">
          <div className="overlay-stripe">
            <SelectType value={exercise.type} options={typeOptions} defaultValue={exercise.defaultType}/>
            <InputField value={exercise.name} onInput={handleInput} placeholder={textContent.inputPlaceholder} className="input-box name"/>
            <TimeRadioGroup timeChoices={timeChoices} timeUnit={timeUnit} index={index}/>
            <CollapsibleButton/>
          </div>
          <div className="collapsible-content">
            <div className="collapsible-input-container">
                <DescriptionField value={exercise.description} onInput={handleInput} onFocus={handleFocus} placeholder={textContent.addDescription}/>
                <LinkField value={exercise.link} onFocus={handleFocus} placeholder={textContent.addLink} />
            </div>
          </div>
        </div>
        <AddRemoveButtons/>
      </div>
    </div>
  );
};

export default ExerciseRow;
