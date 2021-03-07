export interface CreateMatchRequest {
	player1Address: string;
	player1BetAmount: number;
	player2BetAmount: number;
}

export interface Match {
	player1Address: string;
	player2Address: string | null;

	player1PaymentRequired: number;
	player2PaymentRequired: number;

	player1PaymentDone: number;
	player2PaymentDone: number;

	paymentAddress: string;

	player1MatchId: string;
	player2MatchId: string;
}

export interface IMatchService {
	createMatch(body: CreateMatchRequest): Promise<Match>
	getMatch(matchId: string): Promise<Match | null>
}

export class MatchService implements IMatchService {
	createMatch = async (body: CreateMatchRequest): Promise<Match> => {
		const response = await fetch("http://localhost:3001/match", {
			body: JSON.stringify(body),
			method:"POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const json = await response.json();
		return json as Match;
	};

	getMatch(matchId: string): Promise<Match | null> {
		console.log(matchId)
		throw new Error("Not implemented")
	}
}