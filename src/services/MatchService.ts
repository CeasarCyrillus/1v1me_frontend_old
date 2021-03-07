export class MatchService implements IMatchService {
  readonly endpoint = "/match";
  createMatch = async (body: CreateMatchRequest): Promise<Match> => {
    const url = `http://localhost:3001${this.endpoint}`;
    const method = "POST";
    return await fetchRequest<Match>(url, method, body);
  };

  getMatch = async (matchId: string): Promise<Match | null> => {
    const url = `http://localhost:3001${this.endpoint}/${matchId}`;
    const method = "GET";
    return await fetchRequest<Match>(url, method);
  };
}

const fetchRequest = async <T>(
  url: string,
  method: "GET" | "POST",
  body?: any
) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json as T;
};

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
  createMatch(body: CreateMatchRequest): Promise<Match>;
  getMatch(matchId: string): Promise<Match | null>;
}
