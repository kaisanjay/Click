import React, { Component } from 'react';

export default class Button1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return(
            <button onClick={this.handleClick}>Basic Object {this.state.count}</button>
        );
    }
}