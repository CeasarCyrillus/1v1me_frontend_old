import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {IMatchService, Match} from "../services/MatchService";
import {PaymentQrCode} from "./PaymentSection";
import {GET_MATCH_DONE, GET_MATCH_IN_PROGRESS, GetMatchDone, GetMatchInProgress} from "./CreateMatchPage";

export const MatchPage = (props: {matchService: IMatchService}) => {
	const matchIdSaved = getSavedMatchId()
	const {matchService} = props;
	const dispatch = useDispatch();
	const match = useSelector<RootState, Match | null>(state => state.matchState.match);
	const createMatchInProgress = useSelector<RootState, boolean>(state => state.matchState.createMatchInProgress);

	useEffect(() => {
		if(!matchIdSaved && match !== null){
			sessionStorage.setItem("matchId", match.player1MatchId);
		}
	}, [match, matchIdSaved]);

	const getMatchFromServer = async () => {
		dispatch<GetMatchInProgress>({
			type: GET_MATCH_IN_PROGRESS
		});

		const matchFromServer = await matchService.getMatch(matchIdSaved ?? "");

		dispatch<GetMatchDone>({
			type: GET_MATCH_DONE,
			match: matchFromServer
		});
	};

	if(match === null)
	{
		if(!createMatchInProgress)
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

const getSavedMatchId = () => sessionStorage.getItem("matchId")