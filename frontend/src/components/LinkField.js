import React from 'react';

const LinkField = ({ onFocus, placeholder }) => {
  return (
    <input
      className="input-box link"
      type="url"
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};

export default LinkField;
