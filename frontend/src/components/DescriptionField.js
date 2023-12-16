import React from 'react';

const DescriptionField = ({ onInput, onFocus, placeholder }) => {
  return (
    <textarea
      className="input-box description"
      type="text"
      data-autoresize="true"
      onInput={onInput}
      onFocus={onFocus}
      rows="2"
      placeholder={placeholder}
    />
  );
};

export default DescriptionField;
