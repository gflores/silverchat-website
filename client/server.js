const express = require('express');
var history = require('connect-history-api-fallback');
const path = require("path");
const https = require('https');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(express.static(__dirname + '/dist'));
 
 
const port = process.env.PORT || 3100;

if (process.env.USE_SSL) {
    var serverOptions = {
        key: fs.readFileSync(path.resolve(__dirname + '/../', 'server.key')),
        cert: fs.readFileSync(path.resolve(__dirname + '/../', 'server.crt'))
    };
    var server = https.createServer(serverOptions, app);
    server.listen(port, async () => {
        console.log(`listening on ${port}`);
    });    
} else {
    app.listen(port, async () => {
        console.log(`listening on ${port}`);
    });    
}