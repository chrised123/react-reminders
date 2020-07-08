import React from 'react';
import './../styles/Reminders.css';
import Item from './Item';

const Reminders = (props) => {
  return (
    <div className="reminders-list">
      <h4>Reminders</h4>
      <ul>
        {props.list.map((item, i) => {
          return (
            <Item item={item} key={i} index={i} delete={props.deleteReminder} />
          );
        })}
      </ul>
    </div>
  );
};

export default Reminders;
