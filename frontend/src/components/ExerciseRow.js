import React from 'react';
import textContent from '../../textContent';
import TimeRadioGroup from './TimeRadioGroup';
import CollapsibleButton from './CollapsibleButton';
import DescriptionField from './DescriptionField';
import LinkField from './LinkField';



const ExerciseRow = ({ exercise, handleChange, onRemove }) => {

  // timeChoices need to be imported from somewhere
  const timeChoices = [
    ["5", "5"],
    ["10", "10"],
    ["15", "15"],
    ["20", "20"],
    ["30", "30"],
    ["45", "45"],
    ["60", "60"],
  ];

  const handleButtonClick = () => {
    // Handle button click logic
  };
  const handleInput = (event) => {
    // Handle input logic
  };

  const handleFocus = (event) => {
    // Handle focus logic
  };

  return (
    <div className="exercise_form">
      <div className="stripe-container stripe-{{ forloop.counter }}">
        <div className="stripe-and-collapsible">
          <div className="overlay-stripe">
            <div className="select">
              <select className="exercise-type" value={exercise.type} onChange={handleChange}>
                <option value="WARM-UP">WARM-UP</option>
                <option value="EXERCISE">EXERCISE</option>
                <option value="ARPEGGIO">ARPEGGIO</option>
                <option value="SONG">SONG</option>
              </select>
            </div>
            <div className="input-container">
              <div className="input-box name">
                <input type="text" name="name" placeholder={textContent.inputPlaceholder} value={exercise.name} onChange={handleChange}/>
              </div>
            </div>
            <TimeRadioGroup timeChoices={timeChoices}/>
            <CollapsibleButton onClick={handleButtonClick} />
          </div>

          <div class="collapsible-content">
            <div class="collapsible-input-container">
              <div className="exercise-description">
                <DescriptionField value={exercise.description} onInput={handleInput} onFocus={handleFocus} placeholder={textContent.addDescription}/>
              </div>
              <div className="collapsible-link">
                <LinkField value={exercise.link} onFocus={handleFocus} placeholder={textContent.addLink} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseRow;
