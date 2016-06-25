import React, { Component } from 'react';
import Messages from './messages';
import Horizon from '../horizon-container'

const _horizon = Horizon.get();
const _messageCollection = _horizon('messages');
var _currentUser = null;

export default class MessageContainer extends Component {

    constructor(props) {
	    super(props);
	    this.state = {text: '', errorDescription: ''};
	}

	handleChangeText = (e) =>  {
	    this.setState({text: e.target.value});
	};  

	handleSubmit = () =>  {
        if (this.state.text === '' || this.state.author === '') {
        this.setState({errorDescription: 'The message is required'});
        } else {
            this.storeMessage(this.props.user, this.state.text);
        }
	};

    storeMessage = (user, text) => {
        const message = {
            text: text,
            author: user
        };
        _messageCollection.store(message);
        this.setState({text: '', errorDescription: ''});
	};   

    render() {
        return (
	        <div>
                <div className={'message-container'}>
                    <div>{this.state.errorDescription}</div>
                    <input onChange={this.handleChangeText} className={'message-input'} type='text' placeholder='Enter your message' value={this.state.text}/>
                    <button className={'message-btn'} onClick={this.handleSubmit}>Submit</button>
                    <Messages messages={_messageCollection} user={this.props.user}/>
                </div>
            </div>
        );
    }
}