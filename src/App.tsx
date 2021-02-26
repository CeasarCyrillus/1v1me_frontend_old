import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import {Create1v1Page} from "./pages/Create1v1Page";

export const App = () => {
	return (
		<div className={"app"}>
			<Router>
				<Switch>
					<Route exact={true} path={"/"}>
						<Link to={"/create"}>Create 1v1</Link>
					</Route>

					<Route path={"/create"}>
						<Create1v1Page/>
					</Route>

					<Route path={"*"}>
						<h1>404 Not found :(</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}
