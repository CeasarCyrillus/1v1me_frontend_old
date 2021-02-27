import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import {CreateMatchPage} from "./pages/CreateMatchPage";
import {PaymentPage} from "./pages/PaymentPage";

export const App = () => {
	return (
		<div className={"app"}>
			<Router>
				<Switch>
					<Route path={"/"}>
						<CreateMatchPage/>
					</Route>

					<Route path={"/payment"}>
						<PaymentPage />
					</Route>

					<Route path={"*"}>
						<h1>404 Not found :(</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}
