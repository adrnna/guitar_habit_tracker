import React from 'react';

const CollapsibleButton = ({ onClick }) => {
  return (
    <div className="collapsible">
      <button type="button" className="btn-collapsible" onClick={onClick}>
        <span className="material-symbols-outlined">arrow_drop_down_circle</span>
      </button>
    </div>
  );
};

export default CollapsibleButton;
