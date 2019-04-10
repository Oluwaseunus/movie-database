import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Single from './components/Single';

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/movies/:id" render={props => <Single {...props} />} />
				</Switch>
			</Router>
		</>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Routes />, rootElement);
