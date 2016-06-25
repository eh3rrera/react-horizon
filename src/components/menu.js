import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Horizon from '../horizon-container';

export default class Menu extends Component {

    logout = (e) =>  {
	    e.preventDefault();
	    Horizon.clearAuthTokens();
	    this.context.router.push("/")
    }

    render() {
        var menu = Horizon.get().hasAuthToken()
            ?   <div className={'menu'}>
                    <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
                    <Link to="/messages" className={'menu-option'} activeClassName="active">Messages</Link>
                    <a href="#" className={'menu-option'} onClick={this.logout}>Logout</a>
                </div>
            :   <div className={'menu'}>
                    <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
                    <Link to="/login" className={'menu-option'} activeClassName="active">Login</Link>
                </div>;
        
        return (
	        menu
        );
    }
}

Menu.contextTypes = {
  router: React.PropTypes.object
};