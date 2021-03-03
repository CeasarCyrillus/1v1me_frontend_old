import React from "react";
import {Match} from "../services/CreateMatchService";
import {PaymentSectionPageObject} from "./pageobject/PaymentSectionPageObject";
// TODO: add tests for checking when the match is in the state,
// Then show the payment section on the match page
describe("PaymentSection.tsx", () => {
	describe("shows", () => {
		const match: Match = {
			link: "/match/171-match-id919201",
			paymentAddress: "nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk",
			player1Address: "",
			player1PaymentDone: 20.55,
			player1PaymentRequired: 130,
			player2Address: null,
			player2PaymentDone: 0,
			player2PaymentRequired: 150
		}

		let page: PaymentSectionPageObject;

		beforeEach(() => {
			page = new PaymentSectionPageObject({match: match})
		});

		test("QR code for payment address", () => {
			expect(page.paymentAddressQr()).not.toBeNull();
		})

		test("payment address", () => {
			expect(page.paymentAddress())
				.toHaveTextContent("nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk");
		})

		test("payment status", () => {
			expect(page.paymentRequired()).toHaveTextContent("Payment required: 130 NANO");
			expect(page.paymentDone()).toHaveTextContent("Payment done: 20.55 NANO")
			expect(page.paymentLeft()).toHaveTextContent("Payment left: 109.45 NANO");
		})
	})
})