import React, { Component } from 'react';
import Message from './message';

export default class Messages extends Component {
  
	constructor(props) {
        super(props);
        this.messageCollection = this.props.messages;
        this.userId = '';
        this.state = {messages: []};
	}

	componentWillReceiveProps(nextProps) {
        if (nextProps.user !== this.userId) {
            this.userId = nextProps.user;
            this.messageCollection.findAll({author: this.userId}).watch().subscribe(
                (collection) => {
                    if(collection) {
                        this.setState({messages: collection});
                    }
                },
                (err) => {
                    console.log(err);
                }
            );
        }     
	}
  
	render() {
        const messagesMapped = this.state.messages.map((result, index) => {
            return <Message message={result} key={index}/>
        });
        
        return <div>{messagesMapped}</div>;
	}
}