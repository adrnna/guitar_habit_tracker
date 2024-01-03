import React, { } from 'react';
import textContent from '../../textContent';
import TimeRadioGroup from './TimeRadioGroup';
import CollapsibleButton from './CollapsibleButton';
import DescriptionField from './DescriptionField';
import LinkField from './LinkField';
import InputField from './InputField';
import SelectType from './SelectType';
import AddRemoveButtons from './AddRemoveButtons';


const ExerciseRow = ({ exercise, index, exerciseInfo, setExerciseInfo, onRemove, onAdd, }) => {

  console.log('exercise: ', exercise)

  const typeOptions = textContent.typeOptions;
  const timeChoices = textContent.timeChoices;
  const timeUnit = textContent.timeUnit;

  const handleTypeChange = (selectedType) => {
    const updatedExerciseInfo = [...exerciseInfo];
    updatedExerciseInfo[index] = {...updatedExerciseInfo[index], type: selectedType.target.value };
    setExerciseInfo(updatedExerciseInfo);
  };

  const handleNameInput = (event) => {
    const updatedExerciseInfo = [...exerciseInfo];
    updatedExerciseInfo[index] = {...updatedExerciseInfo[index], name: event.target.value };
    setExerciseInfo(updatedExerciseInfo);
  };

  const handleTimeSelect = (selectedTime) => {
    const updatedExerciseInfo = [...exerciseInfo];
    updatedExerciseInfo[index] = {...updatedExerciseInfo[index], time: selectedTime };
    setExerciseInfo(updatedExerciseInfo);
  };

  const handleDescriptionInput = (event) => {
    const updatedExerciseInfo = [...exerciseInfo];
    updatedExerciseInfo[index] = {...updatedExerciseInfo[index], description: event.target.value };
    setExerciseInfo(updatedExerciseInfo);
  };
  

  return (
    <div className="exercise_form">
      <div className={`stripe-container stripe-${index}`}>
        <div className="stripe-and-collapsible">
          <div className="overlay-stripe">
            <SelectType value={exerciseInfo[index]?.type || ''} onChange={handleTypeChange} options={typeOptions} defaultValue={exercise.type}/>
            <InputField value={exerciseInfo[index]?.name || ''} onInput={handleNameInput} placeholder={textContent.inputPlaceholder} className="input-box name"/>
            <TimeRadioGroup selectedTime={exerciseInfo[index]?.time || ''} onChange={handleTimeSelect} timeChoices={timeChoices} timeUnit={timeUnit} index={index}/>
            <CollapsibleButton/>
          </div>
          <div className="collapsible-content">
            <div className="collapsible-input-container">
                <DescriptionField value={exerciseInfo[index]?.description || ''} onInput={handleDescriptionInput} placeholder={textContent.addDescription}/>
                <LinkField value={exerciseInfo[index]?.link || ''} placeholder={textContent.addLink} />
            </div>
          </div>
        </div>
        <AddRemoveButtons/>
      </div>
    </div>
  );
};

export default ExerciseRow;
