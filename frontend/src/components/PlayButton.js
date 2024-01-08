import React from 'react';
import textContent from '../../textContent';


const PlayButton = () => {
  return (
    <div className="save-stripe">
      <button type="button" className="btn btn-save">{textContent.saveButton}</button>
    </div>
  );
};

export default PlayButton;
