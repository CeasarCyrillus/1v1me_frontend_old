export const sendBackendRequest = async () => {
    const response = await fetch("http://localhost:3001/", {
        headers: {}
    });
    const text = await response.text();
}

export const connectToWs = () => {
    const ws = new WebSocket("wss://ws.mynano.ninja/");
    ws.addEventListener("open", (event) => {
        console.log(event);
        ws.send(JSON.stringify({
            "action": "subscribe",
            "topic": "confirmation",
            "ack": true,
        }))
    });

    ws.addEventListener("message", (message) => {
        console.log(message);
    })
}