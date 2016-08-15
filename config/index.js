module.exports = {
  port: process.env.APP_PORT || 8181,

  horizon_options: {
    project_name: 'react_horizon',
    permissions: true,
    auth: {
      token_secret:  '<YOUR_SECRET_TOKEN>'
    }
  },

  github_oauth_options: {
    path: 'github',
    id: '00000000000000000000',
    secret: '0000000000000000000000000000000000000000',
  },
};