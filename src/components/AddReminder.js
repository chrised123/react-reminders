import React, { useState } from 'react';
import './../styles/AddReminder.css';

const MAX_TEXT_LENGTH = 80;

const AddReminder = ({ addReminder }) => {
  const [value, setValue] = useState({
    title: '', 
    date: '', 
    category: ''
  });

  const isDisabled = (value) => (value.title === '' || value.date === '' || value.category === '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled(value)) return;
    addReminder(value);
    setValue({
      title: '', 
      date: '', 
      category: ''
    });
  };

  const handleChange = (newValue, type) => {
    let updatedValue = {...value};
    updatedValue[`${type}`] = newValue;
    setValue(updatedValue);
  };

  return (
    <div className="clearfix">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control add-reminder"
          type="text"
          placeholder="Add reminder"
          onChange={e => handleChange(e.target.value, 'title')}
          value={value.title}
          maxLength={MAX_TEXT_LENGTH}
        />
        <input
          className="form-control add-date"
          type="text"
          placeholder="Date"
          onChange={e => handleChange(e.target.value, 'date')}
          value={value.date}
          maxLength={MAX_TEXT_LENGTH}
        />
        <select
          className="form-control add-color"
          placeholder="Color"
          onChange={e => handleChange(e.target.value, 'category')}
          value={value.category}
          maxLength={MAX_TEXT_LENGTH}
        >
          <option value="">-select-</option>
          <option value="123">Belizehole</option>
        </select>
        <button
          type="submit"
          disabled={isDisabled(value)}
          className={isDisabled(value) ? 'btn btn-disabled' : 'btn btn-primary'}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export { AddReminder };
