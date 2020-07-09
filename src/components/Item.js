import React from 'react';
import './../styles/Item.css';

const Item = ({ item, deleteReminder }) => {
  return (
    <>
      <li className="clearfix">
        <div className="reminder-text">{item}</div>
        <div className="remove-reminder" onClick={deleteReminder}>
          Delete
        </div>
      </li>
    </>
  );
};

export { Item };
