import {render} from "@testing-library/react";
import React from "react";
import {PaymentPage} from "../pages/PaymentPage";

describe("PaymentPage.tsx", () => {
	test("has payment address visible", () => {
		const page = render(<PaymentPage/>);

		expect(page.getByTestId("payment-address")).toBe("nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk");
	})
})