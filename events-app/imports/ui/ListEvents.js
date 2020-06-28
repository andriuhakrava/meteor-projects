import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

class ListEvents extends Component {
  render() {
    console.log('Events', this.props.events);
    return (
      <div>
        {this.props.events.length !== 0 ? this.props.events.map((event) => (
          <div className="list-group" key={event._id} style={{ margin: "20px 100px" }}>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{event.title}</h5>
              </div>
              <p className="mb-1">{event.description}</p>
            </div>
          </div>
        )) : <div className="no-events">OOOPSY: NO EVENTS REGISTERED</div>}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    events: Events.find({}).fetch()
  }
})(ListEvents);