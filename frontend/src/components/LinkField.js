import React from 'react';
import InputFieldUtils from './InputFieldUtils';

const LinkField = ({ onInput, onFocus, placeholder }) => {

  function toggleInput() {
    console.log("link bla")
  }

  return (
    <InputFieldUtils>
    <div className='collapsible-link'>
        <input
          className="input-box link"
          type="text"
          placeholder={placeholder}
          onFocus={onFocus}
          onInput={onInput}
        />
        <button type="button" className="btn btn-confirm" onClick={toggleInput}>
          <span className="material-symbols-outlined">check</span>
        </button>
      </div>
    </InputFieldUtils>
  );
};

export default LinkField;
