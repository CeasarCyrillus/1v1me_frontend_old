import React from "react";
import {PaymentPageObject} from "./pageobject/PaymentPageObject";
import {MatchState} from "../pages/CreateMatchPage";

describe("PaymentPage.tsx", () => {
	describe("when match is in state then shows", () => {
		const matchState: MatchState = {
			createMatchInProgress: false,
			match: {
				link: "/match/171-match-id919201",
				paymentAddress: "nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk",
				player1Address: "",
				player1PaymentDone: 20.55,
				player1PaymentRequired: 130,
				player2Address: null,
				player2PaymentDone: 0,
				player2PaymentRequired: 150
			}
		}

		let page: PaymentPageObject;

		beforeEach(() => {
			page = new PaymentPageObject({initialState: matchState})
		});

		test("QR code for payment address", () => {
			expect(page.paymentAddressQr()).not.toBeNull();
		})

		test("payment address", () => {
			expect(page.paymentAddress())
				.toHaveTextContent("nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk");
		})

		test("link to join", () => {
			expect(page.joinLink()).toHaveTextContent("http://localhost:3000/match/171-match-id919201");
		})

		test("payment status", () => {
			expect(page.paymentRequired()).toHaveTextContent("Payment required: 130 NANO");
			expect(page.paymentDone()).toHaveTextContent("Payment done: 20.55 NANO")
			expect(page.paymentLeft()).toHaveTextContent("Payment left: 109.45 NANO");
		})
	})
	;

	test("shows loading when payment address is not in the state", () => {
		const initialState: MatchState = {
			createMatchInProgress: false,
			match: null
		}

		const page = new PaymentPageObject({initialState});

		expect(page.loadingIcon()).toBeVisible();
	});
})