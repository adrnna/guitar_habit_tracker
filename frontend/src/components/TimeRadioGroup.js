import React from 'react';

const TimeRadioGroup = ({ timeChoices, timeUnit, index, selectedTime, onChange }) => {

  return (
    <div className="btn-time-group">
      {timeChoices.map((choice) => (
        <label key={choice} htmlFor={`stripe-${index}-time-${choice}`} className={`btn btn-time ${selectedTime === choice ? 'selected' : ''}`}>
          <input type="radio" id={`stripe-${index}-time-${choice}`} name="time" value={choice}
           checked={selectedTime === choice}
           onChange={() => onChange(choice)}
          />
          <span className="time-number">{choice}</span>
          <span className="unit">{timeUnit}</span>
        </label>
      ))}
    </div>
  );
};

export default TimeRadioGroup;
