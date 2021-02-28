import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ICreateMatchService, Match} from "../services/CreateMatchService";

export interface CreateMatchPageProps {
	createMatchService?: ICreateMatchService;
}

export const CreateMatchPage = (props: CreateMatchPageProps) => {
	const [player1Address, setPlayer1Address] = useState("");
	const [player1BetAmount, setPlayer1BetAmount] = useState(0);
	const [player2BetAmount, setPlayer2BetAmount] = useState(0);

	return (
		<div>
			<h1>1v1 me</h1>
			<input
				className={"addressInput"}
				data-testid={"address-input"}
				type={"text"}
				placeholder={"nano address"}
				value={player1Address}
				onChange={event => setPlayer1Address(event.target.value)}
			/>
			<br/>

			<input
				className={"betAmountInput"}
				data-testid={"bet-amount-input"}
				type={"number"}
				placeholder={"bet amount"}
				value={player1BetAmount}
				onChange={event => {
					const betAmount = Number(event.target.value);
					setPlayer1BetAmount(betAmount);
					setPlayer2BetAmount(betAmount);
				}}
			/>
			<br/>

			<Link to={"/payment"}>
				<button
					className={"create1v1Button"}
					data-testid={"create-1v1-button"}
					onClick={() => {
						const newMatch = {
							player1Address,
							player1BetAmount,
							player2BetAmount,
						};

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

const MATCH_CREATED = "MATCH_CREATED";

interface MatchCreated {
	type: typeof MATCH_CREATED;
	match: Match;
}

type MatchActions = MatchCreated;
export const matchReducer = (state: MatchState = {match: null}, actions: MatchActions) => {
	return state;
}