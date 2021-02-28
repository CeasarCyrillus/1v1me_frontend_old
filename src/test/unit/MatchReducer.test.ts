import {Match} from "../../services/CreateMatchService";
import {MATCH_CREATED, MatchCreated, matchReducer, MatchState} from "../../pages/CreateMatchPage";

describe("matchReducer", () => {
	test("MATCH_CREATED adds match to global state", () => {
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

		const action: MatchCreated = {
			type: MATCH_CREATED,
			match: match
		}

		const expectedInitialState: MatchState = { match: null }
		const expectedNewState: MatchState = { match: match }

		expect(matchReducer(undefined, null)).toEqual(expectedInitialState);
		expect(matchReducer(undefined, action)).toEqual(expectedNewState);
	});
})