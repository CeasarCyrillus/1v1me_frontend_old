import { fireEvent } from "@testing-library/react";
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

	describe("validation", () => {
		describe("is not shown", () => {
			test("by default", () => {
				const component = new NanoAddressInputPageObject();
				expect(component.queryValidationMessage()).toBeNull();
			});

			test("on focus", () => {
				const component = new NanoAddressInputPageObject();
				fireEvent.focus(component.addressInput());
				expect(component.queryValidationMessage()).toBeNull();
			});

			test("when text is entered", () => {
				const component = new NanoAddressInputPageObject();
				component.writeAddress("bad_address");
				expect(component.queryValidationMessage()).toBeNull();
			});

			test("when a valid address is entered and then input is blurred", () => {
				const component = new NanoAddressInputPageObject();
				const validAddress = "nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk";

				component.writeAddress(validAddress);
				fireEvent.blur(component.addressInput());

				expect(component.queryValidationMessage()).toBeNull();
			});

			test("when empty is entered and then input is blurred", () => {
				const component = new NanoAddressInputPageObject();

				component.writeAddress("");
				fireEvent.blur(component.addressInput());

				expect(component.queryValidationMessage()).toBeNull();
			})

			test("when address is invalid and then input is blurred and then user empties field and then input is blurred", () => {
				const component = new NanoAddressInputPageObject();

				component.writeAddress("invalid_nano_address");
				fireEvent.blur(component.addressInput());
				expect(component.queryValidationMessage()).not.toBeNull();

				component.clearAddressInput();
				fireEvent.blur(component.addressInput());

				expect(component.queryValidationMessage()).toBeNull();
			})

			test("when address is invalid and then input is blurred and then user empties field", () => {
				const component = new NanoAddressInputPageObject();

				component.writeAddress("invalid_nano_address");
				fireEvent.blur(component.addressInput());
				expect(component.queryValidationMessage()).not.toBeNull();

				component.clearAddressInput();

				expect(component.queryValidationMessage()).toBeNull();
			})
		});

		describe("is shown", () => {
			test("when address is invalid and then input is blurred", () => {
				const component = new NanoAddressInputPageObject();

				component.writeAddress("invalid_nano_address");
				fireEvent.blur(component.addressInput());

				expect(component.queryValidationMessage()).not.toBeNull();
			})

			test("when address is invalid and then input is blurred and then user writes again", () => {
				const component = new NanoAddressInputPageObject();

				component.writeAddress("invalid_nano_address");
				fireEvent.blur(component.addressInput());
				expect(component.queryValidationMessage()).not.toBeNull();

				component.writeAddress("invalid_nano_address_continuation");
				expect(component.queryValidationMessage()).not.toBeNull();
			})
		})
	})
})