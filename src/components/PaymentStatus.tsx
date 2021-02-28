import React from "react";

interface PaymentStatusProps {
	paymentRequired: number;
	paymentDone: number;
}
export const PaymentStatus = (props: PaymentStatusProps) => {
	const {paymentRequired, paymentDone} = props;
	const paymentLeft = paymentRequired - paymentDone;
	return (
		<div>
			<p data-testid={"payment-required"}>Payment required: {paymentRequired} NANO</p>
			<p data-testid={"payment-done"}>Payment done: {paymentDone} NANO</p>
			<p data-testid={"payment-left"}>Payment left: {paymentLeft} NANO</p>
		</div>)
}