import React, { useState } from 'react';
import { Reminders } from './Reminders';
import { Archives } from './Archives';
import { AddReminder } from './AddReminder';
import './../styles/Reminder.css';

// Don't use classes (old & slow).
// Don't use this keyword at all cost
const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [archives, setArchives] = useState([]);

  const addReminder = (item) => {
    setReminders([...reminders, item]);
  };

  // This is a Thunk which is basically a multi level function
  const deleteReminder = (i) => () => {
    setReminders(reminders.filter((item, index) => index !== i));
  };

  const addArchive = (item, i) => () => {
    setArchives([...archives, item]);
    setReminders(reminders.filter((item, index) => index !== i));
  };

  const removeArchive = (i) => () => {
    setArchives(archives.filter((item, index) => index !== i));
  }

  // Now the Fragments , you can just use <> </>
  return (
    <>
      <div className="container">
        <AddReminder addReminder={addReminder} />
        <Reminders
          list={reminders}
          deleteReminder={deleteReminder}
          addArchive={addArchive}
        />
        <Archives
          list={archives}
          removeArchive={removeArchive}
        />
      </div>
    </>
  );
};

export default Reminder;
