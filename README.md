# react-horizon

This application shows how to integrate React, React Router, and Horizon.io with OAuth authentication. You can follow the [tutorial](http://tutorials.pluralsight.com/) to build this application or jump straight to the code.

# Requirements

- [RethinkDB](https://rethinkdb.com/docs/install/)
- [Node.js](https://nodejs.org/en/download/)
- [Horizon.io](http://horizon.io/install/)

# Installation
1. Start RethinkDB server with the command `rethinkdb`
2. In another terminal, clone this repository and `cd` into it.
3. Register a new application on Github:
    1. Go to https://github.com/settings/applications/new and enter the following information:
        - **Application name:** react_horizon (any name will do)
        - **Homepage URL:** https://localhost:8181 (or whatever your URL is, just remember the *https* part)
    2. When you register the application, the client ID, and client secret will be presented
    3. Copy this values to the `config.js` in the `github_oauth_options` object
    4. In this file, change `token_secret` for something else. This is the key used to sign the authentication tokens
4. Execute `hz create-cert` to create the self-signed certificate for SSL (this command will create two files, `horizon-cert.pem` and `horizon-key.pem`
5. Import the schema and permission rules to you RethinkDB server with `hz set-schema -n react_horizon -c localhost:28015 schema.toml` (change the connection URL if it applies)
6. Execute `npm install` to download dependencies
7. Execute `npm start` to bundle the application and start the Node.js server
8. Go to https://localhost:8181, log in with your Github account and start playing with the app.

# License
MIT
