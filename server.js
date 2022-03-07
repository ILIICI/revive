const WebSocket = require ('ws');
const fs = require('fs');
const ws = new WebSocket ('wss://ws.coincap.io/prices?assets=bitcoin');

ws.on('message', function incoming(data) {
    if(data != "Connected"){
            try {
                const parsedData = JSON.parse(data);
                  fs.writeFileSync(`${'./database'}.json`, JSON.stringify(parsedData));
              } catch (e) {
                console.error(e.message);
              }
    }
  });