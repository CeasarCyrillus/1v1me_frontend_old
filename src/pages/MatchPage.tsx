import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Match} from "../services/CreateMatchService";

export const MatchPage = () => {
	const match = useSelector<RootState, Match | null>(state => state.matchState.match)
	if(match === null)
		return (
			<div data-testid={"loading-icon"}>
				<p>Loading...</p>
			</div>)
	return <p>There's a match yo!</p>
}