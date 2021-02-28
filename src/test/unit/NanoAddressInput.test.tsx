import React from "react";
import {NanoAddressInputPageObject} from "../pageobject/NanoAddressInputPageObject";

describe("NanoAddressInput.tsx", () => {
	test("text entered is sent to given callback", () => {
		const mockedCallback = jest.fn();
		const component = new NanoAddressInputPageObject({onChangeCallback: mockedCallback});

		component.writeAddress("nano_address");

		expect(mockedCallback).toHaveBeenCalledWith("nano_address");
	})

	test("value passed as prop is set as value in input", () => {
		const component = new NanoAddressInputPageObject({initialValue: "nano_address"});
		expect(component.addressInput().value).toBe("nano_address");
	})
})