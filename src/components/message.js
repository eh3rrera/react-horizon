import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text, author} = this.props.message;
        return (
            <div className={'message-row'}>
                <div><b>Author:</b> {author}</div>
                <div><b>Text:</b> {text}</div>
            </div>
        );
    }
}