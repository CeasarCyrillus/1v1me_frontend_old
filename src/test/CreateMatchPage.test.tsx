import React from 'react';
import {CreateMatchPageObject} from "./pageobject/CreateMatchPageObject";

describe("Create1v1Page.tsx", () => {
	test("Has input for nano address", () => {
		const component = new CreateMatchPageObject();

		expect(component.addressInput()).not.toBeNull();
	});

	test("Has input for bet amount", () => {
		const component = new CreateMatchPageObject()

		expect(component.betAmountInput()).not.toBeNull();
	});

	test("Has button for creating the 1v1", () => {
		const component = new CreateMatchPageObject()

		expect(component.createMatchButton()).not.toBeNull();
	});
})

