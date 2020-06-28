import React, { Component } from 'react';
import { Events } from '../api/events.js';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    }
  }

  handleChange = (event) => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, date } = this.state;

    Events.insert({
      title,
      description,
      date
    });

    this.setState({
      title: "",
      description: "",
      date: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h4>Event Sync</h4>
        </div>
        <hr />
        <div className="row">
          <div className="jumbotron col-md-6 offset-md-3">
            <form onSubmit={this.handleSubmit} className="text-center">

              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter event title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter event description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Event Date:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter date in the format mm.dd.yyyy"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Add Event</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEvent;