import React, { useState } from 'react';

const TimeRadioGroup = ({ timeChoices, timeUnit, index }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (choice) => {
    setSelectedTime(choice);
  };

  return (
    <div className="btn-time-group">
      {timeChoices.map((choice) => (
        <label key={choice} htmlFor={`stripe-${index}-time-${choice}`} className={`btn btn-time ${selectedTime === choice ? 'selected' : ''}`}>
          <input type="radio" id={`stripe-${index}-time-${choice}`} name="time" value={choice}
           checked={selectedTime === choice}
           onChange={() => handleTimeChange(choice)}
          />
          <span className="time-number">{choice}</span>
          <span className="unit">{timeUnit}</span>
        </label>
      ))}
    </div>
  );
};

export default TimeRadioGroup;
