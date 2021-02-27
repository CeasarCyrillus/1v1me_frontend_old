import React from "react";
import { Link } from "react-router-dom";
import {Match, ICreateMatchService} from "../services/CreateMatchService";

export interface ICreateMatchPageProps {
	createMatchService?: ICreateMatchService;
}

export const CreateMatchPage = (props: ICreateMatchPageProps) => {
	const newMatch = {
		player1Address: "nano_dudeman",
		player1BetAmount: 1,
		player2BetAmount: 2
	};

	return (
		<div>
			<h1>1v1 me</h1>
			<input
				className={"addressInput"}
				data-testid={"address-input"}
				type={"text"}
				placeholder={"nano address"}
			/>
			<br/>

			<input
				className={"betAmountInput"}
				data-testid={"bet-amount-input"}
				type={"number"}
				placeholder={"bet amount"}
			/>
			<br/>

			<Link to={"/payment"}>
				<button
					className={"create1v1Button"}
					data-testid={"create-1v1-button"}
					onClick={() => {
						props.createMatchService?.createNewMatch(newMatch);
					}}
				>
					Create 1v1
				</button>
			</Link>
		</div>
	);
}

export interface MatchState {
	match: Match | null
}

const initialMatchState = { match: null };

const MATCH_CREATED = "MATCH_CREATED";
interface MatchCreated {
	type: typeof MATCH_CREATED;
	match: Match;
}

type MatchActions = MatchCreated;
export const matchReducer = (state: MatchState = initialMatchState, actions: MatchActions) => {
	return state;
}