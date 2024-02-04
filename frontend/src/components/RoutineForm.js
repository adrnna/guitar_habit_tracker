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
  const [exerciseInfo, setExerciseInfo] = useState(initialExercises);

  const handleAddExercise = () => {
    console.log("ADDING EXERCISE");
    setExerciseInfo([...exerciseInfo, { name: '', time: '', description: '', link: '' }]);
  };

  const handleRemoveExercise = (index) => {
    console.log("REMOVING EXERCISE");
    setExerciseInfo(exerciseInfo.filter((row, i) => i !== index));
  };

  const submitExercises = async (csrftoken) => {
    const exerciseIds = [];

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
          exerciseIds.push(response.data.id);
          console.log(exerciseIds);
        })
        .catch(error => {
          console.error('ExError:', error);
        })
      } 
    }
    return exerciseIds;
  };

  const submitRoutine = async (csrftoken, exerciseIds) => {
    const routineData = {
      routine_name: routineName,
      exercises: exerciseIds,
    };
    await axios.post('api/routines/', routineData, {
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

    const csrftoken = document.cookie.match(/csrftoken=([\w-]+)/)[1];
    console.log(exerciseInfo);

    await submitExercises(csrftoken);
    const exerciseIds = await submitExercises(csrftoken);
    await submitRoutine(csrftoken, exerciseIds);

    // await submitRoutine(csrftoken);
  };

  const handleInput = (event) => {
    setRoutineName(event.target.value);
  };


  return (
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
  );
};      

export default RoutineForm;