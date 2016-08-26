import Horizon from '@horizon/client'

const _horizon = Horizon({authType: 'unauthenticated'});

export default {
  get: () => _horizon,
  clearAuthTokens: () => Horizon.clearAuthTokens(),
  getCurrentUser: (callback) => {
      _horizon.connect();
      _horizon.currentUser().fetch().subscribe(user => callback(user));
  }
}