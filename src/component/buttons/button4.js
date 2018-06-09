import React, { Component } from 'react';

export default class Button4 extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState(
            prevState => ({ count: prevState.count + 1 }),
            () => {
                console.log(this.state.count);
            }
        );
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.count} : solution 2</button>
        );
    }
}