import React, { Component, Fragment } from 'react';
import Reminders from './Reminders';
import AddReminder from './AddReminder';
import './../styles/Reminder.css';

class Reminder extends Component {
  state = {
    reminders: [],
  };

  addReminder = (item) => {
    this.setState({ reminders: [item, ...this.state.reminders] });
    console.log(this.state.reminders);
  };

  deleteReminder = (i) => {
    const newArr = [...this.state.reminders];
    newArr.splice(i, 1);
    this.setState({ reminders: newArr });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <AddReminder addReminder={this.addReminder} />
          <Reminders
            list={this.state.reminders}
            deleteReminder={this.deleteReminder}
          />
        </div>
      </Fragment>
    );
  }
}

export default Reminder;
