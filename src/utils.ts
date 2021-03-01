export const MY_NANO_ADDRESS = "nano_3x3r177uxmk33hi9wk186dmhhikicbs79h78g8bmci8ghqxc7bqbg6x6a1oa"
export const sendBackendRequest = async () => {
    const response = await fetch("http://localhost:3001/", {
        headers: {}
    });
    const text = await response.text();
}

export const connectToWs = (address:string) => {
    const ws = new WebSocket("wss://socket.nanos.cc");
    console.log("Listening for " + address)
    ws.addEventListener("open", (event) => {
        console.log(event);
        ws.send(JSON.stringify({
            "action": "subscribe",
            "topic": "confirmation",
            "ack": true,
            "options": {
                "accounts": [address]
            }
        }))
    });

    ws.addEventListener("message", (message) => {
        console.log(message);
    })
}