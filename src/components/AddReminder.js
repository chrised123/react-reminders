import React, { useState } from 'react';
import './../styles/AddReminder.css';

const MAX_TEXT_LENGTH = 80;

const AddReminder = ({ addReminder }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') return;
    addReminder(value);
    setValue('');
  };

  const handleChange = ({ target }) => {
    let { value } = target;
    setValue(value);
  };

  return (
    <div className="clearfix">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control add-reminder"
          type="text"
          placeholder="Add reminder"
          onChange={handleChange}
          value={value}
          maxLength={MAX_TEXT_LENGTH}
        />
        <input
          className="form-control add-date"
          type="text"
          placeholder="Date"
          onChange={handleChange}
          value={value}
          maxLength={MAX_TEXT_LENGTH}
        />
        <select
          className="form-control add-color"
          placeholder="Color"
          onChange={handleChange}
          value={value}
          maxLength={MAX_TEXT_LENGTH}
        >
          <option value="##2980b9">Belizehole</option>
        </select>
        <button
          type="submit"
          disabled={value === ''}
          className={value !== '' ? 'btn btn-primary' : 'btn btn-disabled'}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export { AddReminder };
