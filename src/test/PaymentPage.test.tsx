import React from "react";
import {PaymentPageObject} from "./pageobject/PaymentPageObject";
import {MatchState} from "../pages/CreateMatchPage";

describe("PaymentPage.tsx", () => {
	test("shows payment address from the state", () => {
		const initialState: MatchState = {
			match: {
				link: "",
				paymentAddress: "nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk",
				player1Address: "",
				player1PaymentDone: 0,
				player1PaymentRequired: 0,
				player2Address: null,
				player2PaymentDone: 0,
				player2PaymentRequired: 0
			}
		}

		const page = new PaymentPageObject({initialState});
		expect(page.paymentAddressQr()).not.toBeNull();
		expect(page.paymentAddress())
			.toHaveTextContent("nano_38prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk");
	});
})