import React from "react";
import QRCode from "react-qr-code";

export const PaymentPage = (props: {}) => {
	const paymentAddress = "nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk";
	return (
		<div>
			<h1>Payment page</h1>
			<QRCode data-testid={"payment-address-qr"} value={paymentAddress}/>
			<p data-testid={"payment-address"}>{paymentAddress}</p>
		</div>)
}