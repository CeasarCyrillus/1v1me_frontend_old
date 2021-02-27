import {render} from "@testing-library/react";
import React from "react";
import {PaymentPage} from "../pages/PaymentPage";

describe("PaymentPage.tsx", () => {
	test("shows payment address from the state", () => {
		const page = render(<PaymentPage/>);

		expect(page.getByTestId("payment-address-qr")).not.toBeNull();
		expect(page.getByTestId("payment-address"))
			.toHaveTextContent("nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk");
	})
})