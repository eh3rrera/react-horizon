import Horizon from '@horizon/client'

const _horizon = Horizon({authType: 'token'});

export default {
  get: () => _horizon,
  clearAuthTokens: () => Horizon.clearAuthTokens(),
  getCurrentUser: (callback) => {
      _horizon.connect();
      _horizon.currentUser().fetch().subscribe(user => callback(user));
  }
}