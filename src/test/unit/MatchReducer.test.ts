import {Match} from "../../services/CreateMatchService";
import {
	CREATE_MATCH_DONE,
	CREATE_MATCH_IN_PROGRESS,
	CreateMatchDone,
	CreateMatchInProgress,
	matchReducer
} from "../../pages/CreateMatchPage";

describe("matchReducer", () => {
	test(`${CREATE_MATCH_DONE} adds match to global state`, () => {
		const match: Match = {
			link: "",
			paymentAddress: "nano_9091m6mj5as2jd3ja4sjd1jas89dj678as7d8nn0asd8ads8as0da9sd8ad7",
			player1Address: "nano_10281ma3mK5as2jd3ja4sjd1jas19j678as7d8nn0asd8ads8as0da9sd8ad9",
			player1PaymentDone: 88,
			player1PaymentRequired: 167,
			player2Address: "nano_10281ma3mK5as2jd3ja4sjd1jas19j678as7d8nn0asd8ads8as0da9sd8ad9",
			player2PaymentDone: 167,
			player2PaymentRequired: 167
		}

		const action: CreateMatchDone = {
			type: CREATE_MATCH_DONE,
			match: match
		}

		expect(matchReducer(undefined, null).match).toEqual(null);
		expect(matchReducer(undefined, action).match).toEqual(match);
	});

	test(`${CREATE_MATCH_IN_PROGRESS} sets createMatchInProgress to true`, () => {
		const action: CreateMatchInProgress = {
			type: CREATE_MATCH_IN_PROGRESS
		}


		expect(matchReducer(undefined, null).createMatchInProgress).toEqual(false);
		expect(matchReducer(undefined, action).createMatchInProgress).toEqual(true);
	})
})