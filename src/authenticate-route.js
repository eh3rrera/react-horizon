import React, { Component, PropTypes } from 'react'
import Login from './components/login';
import Horizon from './horizon-container'

const _horizon = Horizon.get();

export default (ChildComponent) => {
	class AuthenticatedComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {currentUser: ''};
        }

        componentDidMount() {
            if(_horizon.hasAuthToken()) {
                Horizon.getCurrentUser( (user) => { 
                    this.setState({currentUser: user.id});
                } );
            }
                
        }

        render () {
            return (_horizon.hasAuthToken()
                ? <ChildComponent {...this.props} user={this.state.currentUser} />
                : <Login />
            )
        }
    }

  return AuthenticatedComponent;
}