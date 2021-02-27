import React from "react";
import { Link } from "react-router-dom";

export const CreateMatchPage = () =>
	(
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
				>
					Create 1v1
				</button>
			</Link>

		</div>
	)