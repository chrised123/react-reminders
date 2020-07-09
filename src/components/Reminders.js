import React from 'react';
import './../styles/Reminders.css';
import { Item } from './Item';

// Always use destructuring
const Reminders = ({ deleteReminder, list }) => {
  return (
    <div className="reminders-list">
      <h4>Reminders</h4>
      <ul>
        {list.map((item, index) => (
          // Always use implicit return, which is cool :)
          <Item
            item={item}
            key={index}
            deleteReminder={deleteReminder(index)}
          />
        ))}
      </ul>
    </div>
  );
};

// Better to explicitly mention what is returning, which will be helpful when you return more things from a component
export { Reminders };
