import React from 'react';
import ExerciseRow from './ExerciseRow';

const GuitarRoutineForm = () => {
  const [exercises, setExercises] = React.useState([
    {
      name: '',
      time: '',
      description: '',
      link: '',
    },
  ]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', time: '', description: '', link: '' }]);
  };

  const handleRemoveExercise = (index) => {
    setExercises(exercises.filter((row, i) => i !== index));
  };

  return (
    <div className="guitar-routine-form">
      <h2>Add or Edit Routine</h2>
      <form>
        {exercises.map((exercise, index) => (
          <ExerciseRow
            key={index}
            exercise={exercise}
            handleChange={(e) => setExercises(exercise, e.target.name, e.target.value)}
            onRemove={() => handleRemoveExercise(index)}
          />
        ))}
        <button onClick={handleAddExercise}>Add Exercise</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default GuitarRoutineForm;


// const ExerciseForm = ({ exerciseForm, stripeOptions, }) => {
//     const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
  
//     const toggleCollapsible = () => {
//       setCollapsibleOpen(!isCollapsibleOpen);
//     };
  
//     return (
//       <div className="exercise_form">
//         {/* ... other content ... */}
//         <div className="stripe-and-collapsible">
//           <div className="overlay-stripe">
//             <div className="select">
//               {exerciseForm.exercise_type}
//               {/* ... dropdown logic ... */}
//             </div>
  
//             <div className="input-container">
//               {exerciseForm.exercise_name}
//               {/* ... input logic ... */}
//             </div>
  
//             <div className="btn-time-group">
//               {/* ... radio button logic ... */}
//             </div>
  
//             <div className="collapsible">
//               <button type="button" className="btn-collapsible" onClick={toggleCollapsible}>
//                 <span className="material-symbols-outlined">arrow_drop_down_circle</span>
//               </button>
//             </div>
//           </div>
  
//           <div className={`collapsible-content ${isCollapsibleOpen ? 'open' : ''}`}>
//             <div className="collapsible-input-container">
//               <div className="collapsible-description">
//                 {exerciseForm.description}
//                 {/* ... textarea and button logic ... */}
//               </div>
  
//               <div className="collapsible-link">
//                 {exerciseForm.link}
//                 {/* ... link and button logic ... */}
//               </div>
//             </div>
//           </div>
//         </div>
  
//         <div className="btn-add-or-remove-stripe">
//           <button type="button" id="add-form" className="btn-add-stripe">
//             <span className="material-symbols-outlined">add_box</span>
//           </button>
//           <button type="button" className="btn-remove-stripe">
//             <span className="material-symbols-outlined">indeterminate_check_box</span>
//           </button>
//         </div>
//       </div>
//     );
//   };