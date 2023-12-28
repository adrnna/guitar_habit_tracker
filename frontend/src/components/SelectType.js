import React from 'react';

const SelectType = ({ options, defaultValue  }) => {
  return (
    <div className="select">
        <select className="exercise-type" defaultValue={defaultValue}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
    );
};

export default SelectType;
