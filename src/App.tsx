import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {CreateMatchPage} from "./pages/CreateMatchPage";
import {PaymentPage} from "./pages/PaymentPage";
import {CreateMatchService} from "./services/CreateMatchService";

export const App = () => {
	const createMatchService = new CreateMatchService();
	return (
		<div className={"app"}>
			<Router>
				<Switch>
					<Route path={"/"}>
						<CreateMatchPage createMatchService={createMatchService}/>
					</Route>

					<Route path={"/payment"}>
						<PaymentPage/>
					</Route>

					<Route path={"*"}>
						<h1>404 Not found :(</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}
