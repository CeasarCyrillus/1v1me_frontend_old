import fetchMock from "fetch-mock";
import { CreateMatchRequest, MatchService } from "../../services/MatchService";
import { getLastCallToFetch } from "../testutils";

describe("MatchService.ts", () => {
  afterEach(() => {
    fetchMock.reset();
  });

  const PLAYER_1_ADDRESS =
    "nano_34prihdxwz3u4ps8qjnn14p7ujyewkoxkwyxm3u665it8rg5rdqw84qrypzk";
  const PLAYER_1_BET_AMOUNT = 5.1293;
  const PLAYER_2_BET_AMOUNT = 0.001928;
  const MATCH_ID = "A9J7K5J6B4G21OD9DJ2MD9A72NRI7A";
  const MATCH_URL = "http://localhost:3001/match";

  test("createMatch", async () => {
    fetchMock.postOnce(MATCH_URL, {});

    const createMatchRequest: CreateMatchRequest = {
      player1Address: PLAYER_1_ADDRESS,
      player1BetAmount: PLAYER_1_BET_AMOUNT,
      player2BetAmount: PLAYER_2_BET_AMOUNT,
    };
    const matchService = new MatchService();

    await matchService.createMatch(createMatchRequest);

    const { url, body } = getLastCallToFetch();
    expect(url).toBe(MATCH_URL);
    expect(body).toEqual({
      player1Address: PLAYER_1_ADDRESS,
      player1BetAmount: PLAYER_1_BET_AMOUNT,
      player2BetAmount: PLAYER_2_BET_AMOUNT,
    });
  });

  test("getMatch", () => {
    const expectedUrl = `${MATCH_URL}/${MATCH_ID}`;
    fetchMock.getOnce(expectedUrl, {});
    const matchService = new MatchService();

    matchService.getMatch(MATCH_ID);

    const { url, body } = getLastCallToFetch();
    expect(url).toBe(expectedUrl);
    expect(body).toEqual({});
  });
});
