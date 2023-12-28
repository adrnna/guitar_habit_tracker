import React from 'react';

const LinkField = ({ onFocus, placeholder }) => {
  return (
    <input
      className="collapsible-link input-box link"
      type="url"
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};

export default LinkField;
