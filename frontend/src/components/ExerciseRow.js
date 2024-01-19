import React, { useRef } from 'react';
import textContent from '../../textContent';
import TimeRadioGroup from './TimeRadioGroup';
import CollapsibleButton from './CollapsibleButton';
import DescriptionField from './DescriptionField';
import LinkField from './LinkField';
import InputField from './InputField';
import SelectType from './SelectType';
import AddRemoveButtons from './AddRemoveButtons';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const ExerciseRow = ({ exercise, index, exerciseInfo, setExerciseInfo, onRemove, onAdd, }) => {

  const typeOptions = textContent.typeOptions;
  const timeChoices = textContent.timeChoices;
  const timeUnit = textContent.timeUnit;

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

// __________________________

  // const ref = useRef(null);

  // const [, drop] = useDrop({
  //   accept: ItemTypes.EXERCISE,
  //   hover: (draggedItem) => {
  //     if (!ref.current) {
  //       return;
  //     }

  //     const draggedIndex = draggedItem.index;
  //     const targetIndex = index;

  //     if (draggedIndex === targetIndex) {
  //       return;
  //     }

  //     const boundingBox = ref.current.getBoundingClientRect();
  //     const middleY = (boundingBox.bottom - boundingBox.top) / 2;
  //     const mouseY = draggedItem.clientY - boundingBox.top;

  //     if (draggedIndex < targetIndex && mouseY < middleY) {
  //       return;
  //     }

  //     if (draggedIndex > targetIndex && mouseY > middleY) {
  //       return;
  //     }

  //     // Swap the items in the array
  //     const newExerciseInfo = [...exerciseInfo];
  //     [newExerciseInfo[draggedIndex], newExerciseInfo[targetIndex]] = [
  //       newExerciseInfo[targetIndex],
  //       newExerciseInfo[draggedIndex],
  //     ];

  //     setExerciseInfo(newExerciseInfo);
  //     draggedItem.index = targetIndex;
  //   },
  // });

  // const [{ isDragging }, drag] = useDrag({
  //   type: ItemTypes.EXERCISE,
  //   item: { index },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  // drag(drop(ref));

  return (
    // <div ref={ref} className={`exercise_form ${isDragging ? 'dragging' : ''}`}>
      <div className="exercise_form">
        <div className={`stripe-container stripe-${index}`}>
          <div className="stripe-and-collapsible">
            <div className="overlay-stripe">
              <div className="overlay-stripe-elements">
                <SelectType value={exerciseInfo[index]?.type || ''} onChange={handleTypeChange} options={typeOptions} defaultValue={exercise.type}/>
                <InputField value={exerciseInfo[index]?.name || ''} onInput={handleNameInput} placeholder={textContent.inputPlaceholder} classNameContainer="exercise-name" className="input-box" />
                <TimeRadioGroup selectedTime={exerciseInfo[index]?.time || ''} onChange={handleTimeSelect} timeChoices={timeChoices} timeUnit={timeUnit} index={index}/>
                <CollapsibleButton/>
              </div>
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
    // </div>
  );
};

export default ExerciseRow;
