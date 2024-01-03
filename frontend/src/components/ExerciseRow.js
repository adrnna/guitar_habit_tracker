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

  const typeOptions = textContent.typeOptions;
  const timeChoices = textContent.timeChoices;
  const timeUnit = textContent.timeUnit;

  // const handleTypeChange = (selectedType) => {
  //   const updatedExerciseInfo = [...exerciseInfo];
  //   updatedExerciseInfo[index] = {...updatedExerciseInfo[index], type: selectedType.target.value };
  //   setExerciseInfo(updatedExerciseInfo);
  // };

  // const handleNameInput = (event) => {
  //   const updatedExerciseInfo = [...exerciseInfo];
  //   updatedExerciseInfo[index] = {...updatedExerciseInfo[index], name: event.target.value };
  //   setExerciseInfo(updatedExerciseInfo);
  // };

  // const handleTimeSelect = (selectedTime) => {
  //   const updatedExerciseInfo = [...exerciseInfo];
  //   updatedExerciseInfo[index] = {...updatedExerciseInfo[index], time: selectedTime };
  //   setExerciseInfo(updatedExerciseInfo);
  // };

  // const handleDescriptionInput = (event) => {
  //   const updatedExerciseInfo = [...exerciseInfo];
  //   updatedExerciseInfo[index] = {...updatedExerciseInfo[index], description: event.target.value };
  //   setExerciseInfo(updatedExerciseInfo);
  // };

  // const handleLinkInput = (event) => {
  //   const updatedExerciseInfo = [...exerciseInfo];
  //   updatedExerciseInfo[index] = {...updatedExerciseInfo[index], link: event.target.value };
  //   setExerciseInfo(updatedExerciseInfo);
  // };


  const handleInputChange = (key, event) => {
    const updatedExerciseInfo = [...exerciseInfo];
    updatedExerciseInfo[index] = { ...updatedExerciseInfo[index], [key]: event };
    setExerciseInfo(updatedExerciseInfo);
  };

  const handleTypeChange = (event) => handleInputChange('type', event.target.value);
  const handleNameInput = (event) => handleInputChange('name', event.target.value);
  const handleTimeSelect = (selectedTime) => handleInputChange('time', selectedTime);
  const handleDescriptionInput = (event) => handleInputChange('description', event.target.value);
  const handleLinkInput = (event) => handleInputChange('link', event.target.value);


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
                <LinkField value={exerciseInfo[index]?.link || ''} onInput={handleLinkInput} placeholder={textContent.addLink} />
            </div>
          </div>
        </div>
        <AddRemoveButtons onRemove={onRemove} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ExerciseRow;
