# react-horizon

This application shows how to integrate React, React Router, and Horizon.io with OAuth authentication. You can follow the [tutorial](http://tutorials.pluralsight.com/interesting-apis/building-a-real-time-application-with-react-react-router-horizon-io-and-oauth) to build this application or jump straight to the code.

# Requirements

- [RethinkDB](https://rethinkdb.com/docs/install/)
- [Node.js](https://nodejs.org/en/download/)
- [Horizon.io](http://horizon.io/install/)

# Pre-Install
1. Register a new application on Github:
  1. Go to https://github.com/settings/applications/new and enter the following information:
     - **Application name:** react_horizon (any name will do)
     - **Homepage URL:** https://localhost:8181 (or whatever your URL is, just remember the *https* part)
  2. When you register the application, the client ID, and client secret will be presented
  3. Copy this values to the `config/index.js` in the `github_oauth_options` object
  4. In this file, change `token_secret` for something else.
     This is the key used to sign the authentication tokens.
     You can change the project name and the port if you want

# Installation
1. Inside the cloned repository execute `npm install` to download dependencies
2. Once install is completed execute `npm run setup:init`
  This will:
    1. Start RethinkDB: `rethinkdb`
    2. Import the schema and permission rules to RethinkDB server: `hz schema apply -n react_horizon -c localhost:28015 ./config/rethinkdb/schema.toml`
       (change the name of the project if you changed in the previous step and the connection URL if it is different for you)
    3. Create the self-signed certificate (`hz create-cert`) for SSL and move them to the `config/tls` directory: `hz create-cert && mv *.pem config/tls`
       (this command will create two files, `horizon-cert.pem` and `horizon-key.pem` which you can find in `config/tls`)
3. Execute `npm start` to bundle the application and start the Node.js server
4. Go to https://localhost:8181 (or whatever your URL is), log in with your Github account and start playing with the app.

# License
MIT
