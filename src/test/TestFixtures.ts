import {CreateMatchRequest, ICreateMatchService, Match} from "../services/CreateMatchService";

export const getMatch = (
	player1Address: string = "nano_3x3r177uxmk33hi9wk186dmhhikicbs79h78g8bmci8ghqxc7bqbg6x6a1oa",
	player1BetAmount: number = 1000): Match => (
		{
			link: "",
			paymentAddress: "",
			player1Address: player1Address,
			player1PaymentDone: 0,
			player1PaymentRequired: player1BetAmount,
			player2Address: null,
			player2PaymentDone: 0,
			player2PaymentRequired: player1BetAmount
		});

export const getMockCreateMatchService = (matchToReturn?: Match): ICreateMatchService => {
	const mockedCreateNewMatch = jest.fn((param: CreateMatchRequest) => {
		const match: Match = matchToReturn ?? getMatch(param.player1Address, param.player1BetAmount);
		return Promise.resolve(match);
	});

	return {
		createNewMatch: mockedCreateNewMatch
	};
}