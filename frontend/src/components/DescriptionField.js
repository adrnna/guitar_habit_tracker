import React from 'react';
import InputFieldUtils from './InputFieldUtils';

const DescriptionField = ({ onInput, onFocus, placeholder }) => {


  return (
    <InputFieldUtils>
      <textarea
        className="collapsible-description input-box description"
        type="text"
        data-autoresize="true"
        onInput={onInput}
        onFocus={onFocus}
        rows="2"
        placeholder={placeholder}
      />
    </InputFieldUtils>
  );
};

export default DescriptionField;
