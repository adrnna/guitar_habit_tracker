
const filterExercises = (exerciseIds, exerciseList) => {
    return exerciseIds.map((exerciseId) => {
      return exerciseList.find((exercise) => exercise.id === exerciseId);
    });
  };
  
const FilteredExercises = ({ exerciseIds, exerciseList }) => {
const filteredExercises = filterExercises(exerciseIds, exerciseList);

return filteredExercises;
};

export default FilteredExercises;
  