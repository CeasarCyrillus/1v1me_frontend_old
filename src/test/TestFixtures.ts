import {CreateMatchRequest, ICreateMatchService, Match} from "../services/CreateMatchService";

export const getMockCreateMatchService = (matchToReturn?: Match): ICreateMatchService => {
	const mockedCreateNewMatch = jest.fn((param: CreateMatchRequest) => {
		const match: Match = matchToReturn ?? {
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

	return {
		createNewMatch: mockedCreateNewMatch
	};
}