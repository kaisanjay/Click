import React, { Component } from 'react';

export default class Button3 extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState((
            { count }
        ) => ({ count: count + 1 }));

        this.setState((
            { count }
        ) => ({ count: count + 1 }));

        this.setState((
            { count }
        ) => ({ count: count + 1 }));

        console.log(this.state.count);
    }

    render(){
        return(
            <button onClick={this.handleClick}>{ this.state.count } : solution 1</button>
        );
    }
}