import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './menu';

export default class MainLayout extends Component {

    render() {
        return (
	        <div className="app">
                <div>
                    <Menu/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
