export interface ICreateMatchRequest {
	player1Address: string;
	player1BetAmount: number;
	player2BetAmount: number;
}

export interface ICreateMatchResponse {
	link: string;
	player1Address: string;
	player2Address: null;

	player1PaymentRequired: number;
	player2PaymentRequired: number;

	player1PaymentDone: number;
	player2PaymentDone: number;

	paymentAddress: string;
}

export interface ICreateMatchService {
	createNewMatch(body: ICreateMatchRequest): Promise<ICreateMatchResponse>
}

export class CreateMatchService implements ICreateMatchService {
	createNewMatch = async (body: ICreateMatchRequest): Promise<ICreateMatchResponse> => {
		const response = await fetch("http://localhost:3001/match", {
			body: JSON.stringify(body),
			method:"POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const json = await response.json();
		return json as ICreateMatchResponse;
	};
}