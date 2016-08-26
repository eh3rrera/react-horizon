const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const horizon = require('@horizon/server');
const config = require('./config');

const app = express();

// Serve our static stuff like css
app.use(express.static(path.join(__dirname, 'dist')));

// Send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './config/tls/horizon-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './config/tls/horizon-cert.pem')),
};

const PORT = config.port;

const server = https.createServer(options, app);

server.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT);
});

const horizon_server = horizon(server, config.horizon_options);

// Add Github authentication
horizon_server.add_auth_provider(horizon.auth.github, config.github_oauth_options);
