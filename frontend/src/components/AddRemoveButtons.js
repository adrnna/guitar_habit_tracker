import React from 'react';

const AddRemoveButtons = () => {
  return (
    <div className="btn-add-or-remove-stripe">
      <button type="button" id="add-form" className="btn-add-stripe">
          <span className="material-symbols-outlined">add_box</span>
      </button>
      <button type="button" className="btn-remove-stripe">
          <span className="material-symbols-outlined">indeterminate_check_box</span>
      </button>
    </div>
  );
};

export default AddRemoveButtons;
