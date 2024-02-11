import React from 'react';

const SelectType = ({ value, onChange, options }) => {

  return (
    <div className="select">
        <select 
            className="exercise-type" 
            // defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            >
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
    );
};

export default SelectType;
