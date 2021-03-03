import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CreateMatchPage} from "./pages/CreateMatchPage";
import {CreateMatchService, ICreateMatchService} from "./services/CreateMatchService";
import {Provider} from "react-redux";
import {store} from "./store";
import "./App.css"
import {MatchPage} from "./pages/MatchPage";

export const App = (props: { createMatchService?: ICreateMatchService }) => {
	const createMatchService = props.createMatchService ?? new CreateMatchService();
	return (
		<Provider store={store}>
			<div className={"app"}>
				<Router>
					<Switch>
						<Route exact={true} path={"/match"}>
							<MatchPage/>
						</Route>
						<Route exact={true} path={"/"}>
							<CreateMatchPage createMatchService={createMatchService}/>
						</Route>
						<Route path={"*"}>
							<h1>404 Not found :(</h1>
						</Route>
					</Switch>
				</Router>
			</div>
		</Provider>
	)
}
