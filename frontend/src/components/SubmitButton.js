import React from 'react';
import textContent from '../../textContent';


const SubmitButton = () => {
  return (
    <div className="save-stripe">
      <button type="submit" className="btn btn-save">{textContent.saveButton}</button>
    </div>
  );
};

export default SubmitButton;
