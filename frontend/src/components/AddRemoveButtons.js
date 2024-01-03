import React from 'react';

const AddRemoveButtons = ({ onRemove, onAdd }) => {
// If there is only one everciseRow it should be blocked from being removed!

  return (
    <div className="btn-add-or-remove-stripe">
      <button type="button" id="add-form" className="btn-add-stripe" onClick={onAdd}>
          <span className="material-symbols-outlined">add_box</span>
      </button>
      <button type="button" className="btn-remove-stripe" onClick={onRemove}>
          <span className="material-symbols-outlined">indeterminate_check_box</span>
      </button>
    </div>
  );
};

export default AddRemoveButtons;
