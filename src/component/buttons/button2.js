import React, { Component } from 'react';

export default class Button2 extends Component{
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

        this.setState({
            count: this.state.count + 1
        });

        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);
    }

    render(){
        return(
            <button onClick={this.handleClick}>Problem with above approach {this.state.count}</button>
        );
    }
}