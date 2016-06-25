import React, { Component } from 'react';
import Horizon from '../horizon-container'

const _horizon = Horizon.get();

export default class Login extends Component {

    handleAuth = () => {
        _horizon.authEndpoint('github').subscribe((endpoint) => {
            window.location.pathname = endpoint;
        });
    };

    render() {
        return (
	        <div>
                <button className={'login-btn'} onClick={this.handleAuth}>Login with Github</button>
            </div>
        );
    }
}