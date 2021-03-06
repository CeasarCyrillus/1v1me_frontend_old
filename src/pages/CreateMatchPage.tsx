import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IMatchService, Match} from "../services/MatchService";
import {useDispatch} from "react-redux";
import {NanoAddressInput} from "../components/NanoAddressInput";

export interface CreateMatchPageProps {
	matchService?: IMatchService;
}

export const CreateMatchPage = (props: CreateMatchPageProps) => {
	const dispatch = useDispatch();
	const [player1Address, setPlayer1Address] = useState("");
	const [player1BetAmount, setPlayer1BetAmount] = useState(0);
	const [player2BetAmount, setPlayer2BetAmount] = useState(0);

	const createNewMatch = async () => {
		const newMatch = {
			player1Address,
			player1BetAmount,
			player2BetAmount,
		};

		const match = await props.matchService?.createMatch(newMatch);
		if (match !== undefined) {
			dispatch<CreateMatchDone>({
				type: CREATE_MATCH_DONE,
				match: match
			});
		}
	};



	return (
		<div>
			<NanoAddressInput currentAddress={player1Address} onChangeCallback={newValue => {
				setPlayer1Address(newValue);
			}}
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

			<Link to={"/match"}>
				<button
					className={"create1v1Button"}
					data-testid={"create-1v1-button"}
					onClick={async () => {
						await createNewMatch();
					}}
				>
					Create 1v1
				</button>
			</Link>
		</div>
	);
}

export interface MatchState {
	match: Match | null;
	createMatchInProgress: boolean;
}

const initialMatchState: MatchState = {
	match: null,
	createMatchInProgress: false,
};

export const CREATE_MATCH_IN_PROGRESS = "CREATE_MATCH_IN_PROGRESS";
export interface CreateMatchInProgress {
	type: typeof CREATE_MATCH_IN_PROGRESS;
}

export const CREATE_MATCH_DONE = "CREATE_MATCH_DONE";
export interface CreateMatchDone {
	type: typeof CREATE_MATCH_DONE;
	match: Match;
}

export const GET_MATCH_IN_PROGRESS = "GET_MATCH_IN_PROGRESS";
export interface GetMatchInProgress {
	type: typeof GET_MATCH_IN_PROGRESS
}

export const GET_MATCH_DONE = "GET_MATCH_DONE";
export interface GetMatchDone {
	type: typeof GET_MATCH_DONE,
	match: Match | null
}

type CreateMatchActions = CreateMatchInProgress | CreateMatchDone;
type GetMatchActions = GetMatchInProgress | GetMatchDone;
type MatchActions =  CreateMatchActions | GetMatchActions;

export const matchReducer = (state: MatchState = initialMatchState, action: MatchActions | null): MatchState => {
	if(action === null) return state;

	switch (action.type) {
		case CREATE_MATCH_IN_PROGRESS:
			return {match: null, createMatchInProgress: true}
		case CREATE_MATCH_DONE:
			return {match: action.match, createMatchInProgress: false}
		case GET_MATCH_IN_PROGRESS:
			return {match: null, createMatchInProgress: false}
		case GET_MATCH_DONE:
			return {match: action.match, createMatchInProgress: false}
	}

	return state;
}