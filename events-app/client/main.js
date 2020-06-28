import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('app'));
});
