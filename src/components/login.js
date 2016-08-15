import React, { Component } from 'react';
import Horizon from '../horizon-container'

const _horizon = Horizon.get();

export default class Login extends Component {

    handleAuth = () => {
        _horizon.authEndpoint('github').subscribe((endpoint) => {
            // window.location.pathname = endpoint;
            window.location.pathname = '/horizon/github';
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