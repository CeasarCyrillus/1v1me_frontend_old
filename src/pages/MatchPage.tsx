import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {IMatchService, Match} from "../services/MatchService";
import {PaymentQrCode} from "./PaymentSection";

export const MatchPage = (props: {matchService: IMatchService}) => {
	const {matchService} = props;
	let match = useSelector<RootState, Match | null>(state => state.matchState.match);
	if(match === null)
	{
		matchService.getMatch("123");
		return (
			<div data-testid={"loading-icon"}>
				<p>Loading...</p>
			</div>)
	}

	return (
		<>
			<p>There's a match yo!</p>
			<PaymentQrCode nanoToPay={match.player1PaymentRequired} paymentAddress={match.paymentAddress} />
		</>
	)
}