import React, { Component } from 'react';
import './../styles/AddReminder.css';

class AddReminder extends Component {
  state = {
    value: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === '') return;
    this.props.addReminder(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = (e) => {
    let text =
      e.target.value.trim() === ''
        ? e.target.value.trim()
        : e.target.value.substring(0, 81);
    this.setState({ value: text });
  };

  render() {
    return (
      <div className="clearfix">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control add-reminder"
            type="text"
            placeholder="Add reminder"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button
            type="submit"
            disabled={this.state.value === ''}
            className={
              this.state.value !== '' ? 'btn btn-primary' : 'btn btn-disabled'
            }
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddReminder;
