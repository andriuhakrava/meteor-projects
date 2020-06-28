import React, { Component } from 'react';
import AddEvent from './AddEvent.js';
import ListEvents from './ListEvents.js';

class EventApp extends Component {
	render() {
		return (
			<div>
				<AddEvent />
				<ListEvents />
			</div>
		);
	}
}

export default EventApp;