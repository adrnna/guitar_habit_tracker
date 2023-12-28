import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import ExerciseRow from './ExerciseRow';
import SubmitButton from './SubmitButton';
import textContent from '../../textContent';


const RoutineForm = () => {
  const defaultTypes = textContent.typeOptions;

  const initialExercises = defaultTypes.map((defaultType) => ({
    name: '', time: '', description: '', link: '', defaultType,
  }));

  const [routineName, setRoutineName] = useState('');
  const [exercises, setExercises] = React.useState(initialExercises);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', time: '', description: '', link: '' }]);
  };

  const handleRemoveExercise = (index) => {
    setExercises(exercises.filter((row, i) => i !== index));
  };

  const handleFormSubmit = async (event) => {
    // default native html behavior is browser reload
    event.preventDefault();

    // const formData = new FormData();
    // formData.append('routine_name', routineName);
    // console.log(routineName);

    const csrftoken = document.cookie.match(/csrftoken=([\w-]+)/)[1];
    console.log(csrftoken);
    console.log(routineName);
    const exercises=[1,2,3,5];
  
    axios.post('api/routines/', { routine_name: routineName, exercises: exercises, }, {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
    })
    .then(response => 
      {console.log('Response:', response);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
      // console.log(response.data);  // Log the response from Django
      // Handle success or navigate to another page
  }

  const handleInput = (event) => {
    // Handle input logic, e.g., updating routineName
    setRoutineName(event.target.value);
    console.log(routineName);
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="routine-name">
        <InputField value={routineName} onInput={handleInput} placeholder={textContent.inputRoutineNamePlaceholder} className="input-box name"/>
      </div>
        {exercises.map((exercise, index) => (
          <ExerciseRow
            key={index}
            index={index}
            exercise={exercise}
            handleChange={(e) => setExercises(exercise, e.target.name, e.target.value)}
            onRemove={() => handleRemoveExercise(index)}
            onAdd={() => handleAddExercise(index)}
          />
        ))}
      <SubmitButton/>
    </form>
  );
};

export default RoutineForm;