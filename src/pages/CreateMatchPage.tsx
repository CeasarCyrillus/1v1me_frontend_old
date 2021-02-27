import React from "react";
import { Link } from "react-router-dom";
import {ICreateMatchService} from "../services/CreateMatchService";

export interface ICreateMatchPageProps {
	createMatchService?: ICreateMatchService;
}

export const CreateMatchPage = (props: ICreateMatchPageProps = {createMatchService: undefined}) => {
	const newMatch = {
		player1Address: "",
		player1BetAmount: 0,
		player2BetAmount: 0
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
						props.createMatchService?.createNewMatch(newMatch)
					}}
				>
					Create 1v1
				</button>
			</Link>
		</div>
	);
}