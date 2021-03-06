import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CreateMatchPage} from "./pages/CreateMatchPage";
import {IMatchService, MatchService} from "./services/MatchService";
import {Provider} from "react-redux";
import {createAppStore} from "./store";
import "./App.css"
import {MatchPage} from "./pages/MatchPage";

export const App = (props: { matchService?: IMatchService }) => {
	const matchService = props.matchService ?? new MatchService();
	return (
		<Provider store={createAppStore()}>
			<div className={"app"}>
				<Router>
					<Switch>
						<Route exact={true} path={"/match"}>
							<MatchPage matchService={matchService}/>
						</Route>
						<Route exact={true} path={"/"}>
							<CreateMatchPage matchService={matchService}/>
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
