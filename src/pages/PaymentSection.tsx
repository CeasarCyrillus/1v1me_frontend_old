import React from "react";
import QRCode from "react-qr-code";
import {Match} from "../services/MatchService";
import {JoinLink} from "../components/JoinLink";
import {PaymentStatus} from "../components/PaymentStatus";
import {tools} from "nanocurrency-web";

export const PaymentQrCode = (props: {nanoToPay: number, paymentAddress: string}) => {
	const {nanoToPay, paymentAddress} = props;
	const rawRequired = tools.convert(nanoToPay.toString(), "NANO", "RAW");
	const qrCodeValue = `nano:${paymentAddress}?amount=${rawRequired}`;
	return (<div>
		<QRCode data-testid={"payment-address-qr"} value={qrCodeValue}/>
		<p data-testid={"payment-address"}>
			{props.paymentAddress}
		</p>
	</div>)
}
export const PaymentSection = (props: { match: Match }) => {
	const {match} = props;

	return (
		<div>
			<PaymentQrCode nanoToPay={match.player1PaymentRequired} paymentAddress={match.paymentAddress} />
			<PaymentStatus paymentRequired={match.player1PaymentRequired} paymentDone={match.player1PaymentDone}/>
			<JoinLink link={`http://localhost:3000${match.link}`}/> // TODO the link should be outside the payment section
		</div>)
}