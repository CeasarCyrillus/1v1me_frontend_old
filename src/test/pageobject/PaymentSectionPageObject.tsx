import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {PaymentSection} from "../../pages/PaymentSection";
import { Match } from "../../services/CreateMatchService";
import {getMatch} from "../TestFixtures";

export class PaymentSectionPageObject {
	private component: RenderResult;

	constructor(options?: { match: Match }) {
		this.component = render(<PaymentSection match={options?.match ?? getMatch()}/>)
	}

	paymentAddressQr = () => this.component.getByTestId("payment-address-qr");
	paymentAddress = () => this.component.getByTestId("payment-address");

	paymentRequired = () => this.component.getByTestId("payment-required");
	paymentDone = () => this.component.getByTestId("payment-done");
	paymentLeft = () => this.component.getByTestId("payment-left");
}