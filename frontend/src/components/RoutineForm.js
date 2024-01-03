import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import ExerciseRow from './ExerciseRow';
import SubmitButton from './SubmitButton';
import textContent from '../../textContent';


const RoutineForm = ({setSuccess}) => {
  const defaultTypes = textContent.typeOptions;

  const initialExercises = defaultTypes.map((defaultType) => ({
    name: '', time: '', description: '', link: '', type: defaultType,
  }));

  const [routineName, setRoutineName] = useState('');
  const [exercises, setExercises] = useState(initialExercises);
  const [exerciseInfo, setExerciseInfo] = useState(initialExercises);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', time: '', description: '', link: '' }]);
  };

  const handleRemoveExercise = (index) => {
    setExercises(exercises.filter((row, i) => i !== index));
  };

  const submitExercises = async (csrftoken) => {
    if (Array.isArray(exerciseInfo)) {
      // Iterate over each exercise in the array
      for (let i = 0; i < exerciseInfo.length; i++) {
        const exercise = exerciseInfo[i];
        
        await axios.post('api/exercises/', {
          exercise_name: exercise.name,
          exercise_type: exercise.type, 
          time: exercise.time, 
          description: exercise.description,
          link: exercise.link
        }, {
          headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
          },
        })
        .then(response => 
          {console.log('ExResponse:', response);
        })
        .catch(error => {
          console.error('ExError:', error);
        })
      } 
    }
  };

  const submitRoutine = async (csrftoken) => {
    const exercises=[1,2,3,5];
    await axios.post('api/routines/', { routine_name: routineName, exercises: exercises, }, {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
    })
    .then(response => 
      {console.log('RoutineResponse:', response),
      setSuccess(true);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
  }

  const handleFormSubmit = async (event) => {
    // default native html behavior is browser reload
    event.preventDefault();

    // const formData = new FormData();
    // formData.append('routine_name', routineName);

    const csrftoken = document.cookie.match(/csrftoken=([\w-]+)/)[1];
    console.log(exerciseInfo);

    await submitExercises(csrftoken);
    await submitRoutine(csrftoken);
  };

  const handleInput = (event) => {
    setRoutineName(event.target.value);
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="routine-name">
          <InputField 
            value={routineName} 
            onInput={handleInput} 
            placeholder={textContent.inputRoutineNamePlaceholder} 
            className="input-box name"
            />
        </div>
          {exerciseInfo.map((exercise, index) => (
            <ExerciseRow
              key={index}
              index={index}
              exercise={exercise}
              exerciseInfo={exerciseInfo}
              setExerciseInfo={setExerciseInfo}
              onRemove={() => handleRemoveExercise(index)}
              onAdd={() => handleAddExercise(index)}
            />
          ))}
        <SubmitButton/>
      </form>
    </div>
  );
};

export default RoutineForm;