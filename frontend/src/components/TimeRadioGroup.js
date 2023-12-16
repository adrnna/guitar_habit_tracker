import React from 'react';

const TimeRadioGroup = ({ timeChoices, }) => {
  return (
    <div className="btn-time-group">
      {timeChoices.map((choice) => (
        <label key={choice[0]} htmlFor={`time-${choice[0]}`} className="btn btn-time">
          <input
            type="radio"
            id={`time-${choice[0]}`}
            name="time"
            value={choice[0]}
            // checked={selectedTime === choice[0]}
            // onChange={onTimeChange}
          />
          <span className="time-number">{choice[1]}</span>
          <span className="unit">min</span>
        </label>
      ))}
    </div>
  );
};

export default TimeRadioGroup;
