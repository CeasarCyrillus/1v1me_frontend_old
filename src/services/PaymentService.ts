export class PaymentService {
  private ws: WebSocket;
  constructor() {
    this.ws = new WebSocket("ws://localhost:3001");
    this.ws.addEventListener("open", (event) => {
      console.log("connected");
      console.log(event);
    });

    this.ws.onmessage = this.onMessage;
    this.ws.addEventListener("message", (message) => {
      console.log("message");
      console.log(message);
    });
  }

  onMessage = (message: MessageEvent) => {
    const msg = JSON.parse(message.data) as WsMessage;
    console.log(msg.id);
    console.log(msg.type);
  };

  sendMsg = () => {
    const message: WsMessage = {
      id: "55",
      type: "heartbeat",
    };

    this.ws.send(JSON.stringify(message));
  };
}

interface WsMessage {
  type: string;
  id: string;
}
