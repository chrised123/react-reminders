import React, { useState } from 'react';
import { Reminders } from './Reminders';
import { AddReminder } from './AddReminder';
import './../styles/Reminder.css';

// Don't use classes (old & slow).
// Don't use this keyword at all cost
const Reminder = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (item) => {
    setReminders([...reminders, item]);
  };

  // This is a Thunk which is basically a multi level function
  const deleteReminder = (i) => () => {
    setReminders(reminders.filter((item, index) => index !== i));
  };

  // Now the Fragments , you can just use <> </>
  return (
    <>
      <div className="container">
        <AddReminder addReminder={addReminder} />
        <Reminders list={reminders} deleteReminder={deleteReminder} />
      </div>
    </>
  );
};

export default Reminder;
