import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ICreateMatchService, Match} from "../services/CreateMatchService";
import {useDispatch} from "react-redux";
import {NanoAddressInput} from "../components/NanoAddressInput";

export interface CreateMatchPageProps {
	createMatchService?: ICreateMatchService;
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

		const match = await props.createMatchService?.createNewMatch(newMatch);
		if (match !== undefined) {
			dispatch<MatchCreated>({
				type: MATCH_CREATED,
				match: match
			});
		}
	};

	return (
		<div>
			<h1>1v1 me</h1>
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

			<Link to={"/payment"}>
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
	match: Match | null
}

export const MATCH_CREATED = "MATCH_CREATED";
export interface MatchCreated {
	type: typeof MATCH_CREATED;
	match: Match;
}

type MatchActions = MatchCreated;
export const matchReducer = (state: MatchState = {match: null}, action: MatchActions | null): MatchState => {
	if(action === null) return state;

	if(action.type === MATCH_CREATED){
		return {match: action.match}
	}

	return state;
}