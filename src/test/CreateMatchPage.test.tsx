import React from 'react';
import {CreateMatchPageObject} from "./pageobject/CreateMatchPageObject";
import {fireEvent} from "@testing-library/react"
import {ICreateMatchService} from "../services/CreateMatchService";

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

	test("Clicking on create match sends request", () => {
		const mockCreateMatchService: ICreateMatchService = {
			createNewMatch: jest.fn()
		}

		const component = new CreateMatchPageObject({createMatchService: mockCreateMatchService});

		fireEvent.click(component.createMatchButton());

		expect(mockCreateMatchService.createNewMatch).toHaveBeenCalledTimes(1);
	})
})

