import React from 'react';
import './../styles/Item.css';

const Item = ({ item, id, deleteReminder, addArchive }) => {
  return (
    <>
      <li className="clearfix">
        <div className="reminder-text">{item?.title} - {item?.date}</div>
        <div className="remove-reminder" onClick={deleteReminder}>
          Delete
        </div>
        <div className="archive-reminder" onClick={addArchive}>
          Archive
        </div>
      </li>
    </>
  );
};

export { Item };
