import React from "react";
import QRCode from "react-qr-code";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Match} from "../services/CreateMatchService";

export const PaymentPage = (props: {}) => {
	const match = useSelector<RootState, Match | null>(state => state.matchState.match)
	return (
		<div>
			<h1>Payment page</h1>
			<QRCode data-testid={"payment-address-qr"} value={match!.paymentAddress}/>
			<p data-testid={"payment-address"}>{match!.paymentAddress}</p>
		</div>)
}