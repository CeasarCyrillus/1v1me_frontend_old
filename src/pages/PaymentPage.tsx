import React from "react";
import QRCode from "react-qr-code";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Match} from "../services/CreateMatchService";
import {JoinLink} from "../components/JoinLink";
import {PaymentStatus} from "../components/PaymentStatus";
import {tools} from "nanocurrency-web";

export const PaymentPage = () => {
	const match = useSelector<RootState, Match | null>(state => state.matchState.match);
	if(match === null) {
		return (
			<div data-testid={"loading-icon"}>
				<p>Loading...</p>
			</div>)
	}

	const rawRequired = tools.convert(match.player1PaymentRequired.toString(), "NANO", "RAW");
	const qrCodeValue = `nano:${match.paymentAddress}?amount=${rawRequired}`;
	return (
		<div>
			<h1>Payment page</h1>
			<div>
				<QRCode data-testid={"payment-address-qr"} value={qrCodeValue}/>
				<p data-testid={"payment-address"}>
					{match.paymentAddress}
				</p>
			</div>
			<PaymentStatus paymentRequired={match.player1PaymentRequired} paymentDone={match.player1PaymentDone}/>
			<JoinLink link={`http://localhost:3000${match.link}`}/>
		</div>)
}