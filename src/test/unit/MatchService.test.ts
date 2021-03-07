import fetchMock from "fetch-mock";
import {CreateMatchRequest, MatchService} from "../../services/MatchService";
import {getLastCallToFetch} from "../testutils";

describe("MatchService.ts", () => {
	afterEach(() => {
		fetchMock.reset();
	})

	test("createMatch", async () => {
		fetchMock.postOnce("http://localhost:3001/match", {});

		const createMatchRequest: CreateMatchRequest = {
			player1Address: "nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk",
			player1BetAmount: 5.12930,
			player2BetAmount: 0.001928

		}
		const matchService = new MatchService()

		await matchService.createMatch(createMatchRequest);

		const {url, body} = getLastCallToFetch();
		expect(url).toBe("http://localhost:3001/match");
		expect(body).toEqual({
			player1Address: "nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk",
			player1BetAmount: 5.12930,
			player2BetAmount: 0.001928
		});
	})

	test("createMatch", () => {
		expect(true).toBeTruthy();
	})

})