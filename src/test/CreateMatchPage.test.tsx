import React from 'react';
import {CreateMatchPageObject} from "./pageobject/CreateMatchPageObject";
import {fireEvent, waitFor} from "@testing-library/react"
import {CreateMatchRequest, ICreateMatchService, Match} from "../services/CreateMatchService";
import userEvent from "@testing-library/user-event";

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

	test("Creates match with the options selected", () => {
		const mockCreateMatchService: ICreateMatchService = {
			createNewMatch: jest.fn()
		}
		const component = new CreateMatchPageObject({createMatchService: mockCreateMatchService});
		const player1Address = "nano_999PlayerAddress3a4lsd4a3sdl301201201203112l12ke12";
		const betAmount = 166.5;

		userEvent.type(component.addressInput(), player1Address);
		userEvent.type(component.betAmountInput(), betAmount.toString());
		fireEvent.click(component.createMatchButton());

		expect(mockCreateMatchService.createNewMatch).toHaveBeenCalledTimes(1);
		const expectedParams = {
			player1Address,
			player1BetAmount: betAmount,
			player2BetAmount: betAmount
		};
		expect(mockCreateMatchService.createNewMatch).toHaveBeenLastCalledWith(expectedParams)
	})

	test("match is added to global state", async () => {
		const mockedCreateNewMatch = jest.fn((param: CreateMatchRequest) => {
				const match: Match = {
					link: "",
					paymentAddress: "",
					player1Address: param.player1Address,
					player1PaymentDone: 0,
					player1PaymentRequired: param.player1BetAmount,
					player2Address: null,
					player2PaymentDone: 0,
					player2PaymentRequired: param.player1BetAmount
				}
				return Promise.resolve(match);
		});

		const mockCreateMatchService: ICreateMatchService = {
			createNewMatch: mockedCreateNewMatch
		}
		const component = new CreateMatchPageObject({createMatchService: mockCreateMatchService});
		const dispatch = component.mockDispatch();
		const player1Address = "nano_489PlayerAddress3a4lsd4a3sdl301201201203112l12ke12";
		const betAmount = 180.1234567;

		userEvent.type(component.addressInput(), player1Address);
		userEvent.type(component.betAmountInput(), betAmount.toString());
		fireEvent.click(component.createMatchButton());

		expect(mockCreateMatchService.createNewMatch).toHaveBeenCalledTimes(1);

		const expectedMatch: Match = {
			link: "",
			paymentAddress: "",
			player1Address: player1Address,
			player1PaymentDone: 0,
			player1PaymentRequired: betAmount,
			player2Address: null,
			player2PaymentDone: 0,
			player2PaymentRequired: betAmount
		}

		await waitFor(() => {
			expect(dispatch).toHaveBeenCalledWith({
				type: "MATCH_CREATED",
				match: expectedMatch
			});
		});

	})
})

