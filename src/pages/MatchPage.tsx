import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {IMatchService, Match} from "../services/MatchService";
import {PaymentQrCode} from "./PaymentSection";
import {GET_MATCH_DONE, GET_MATCH_IN_PROGRESS, GetMatchDone, GetMatchInProgress} from "./CreateMatchPage";

export const MatchPage = (props: {matchService: IMatchService}) => {
	const matchIdInUrl = getMatchIdFromUrl()
	const {matchService} = props;
	const dispatch = useDispatch();
	const match = useSelector<RootState, Match | null>(state => state.matchState.match);

	useEffect(() => {
		if(matchIdInUrl === "" && match !== null){
			window.location.hash = "#" + match.id;
		}
	}, [match, matchIdInUrl]);

	const getMatchFromServer = async () => {
		dispatch<GetMatchInProgress>({
			type: GET_MATCH_IN_PROGRESS
		});

		const matchFromServer = await matchService.getMatch(matchIdInUrl);

		dispatch<GetMatchDone>({
			type: GET_MATCH_DONE,
			match: matchFromServer
		});
	};

	if(match === null)
	{
		getMatchFromServer()
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

const getMatchIdFromUrl = () => window.location.hash;