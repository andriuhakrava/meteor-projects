import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/commits.js';
import { withTracker } from 'meteor/react-meteor-data';

class App extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(result => {
				Meteor.call('data.insert', result);
			})
			.catch(error => error);
	}

	renderUsers = (data) => {
		return data.name;
	}

	render() {
		return (
			<div>
				<h2>Hello from Meteor!</h2>
				<button onClick={ this.handleSubmit }>Get Data!</button>
				{ this.props.users.map((user, index) => <li key={ user._id }>{ user[index].name }</li>) }
			</div>
		);
	}
}

export default withTracker(() => {
	Meteor.subscribe('users');
	return {
		users: Users.find({}).fetch()
	}
})(App);