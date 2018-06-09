import React, { Component, Fragment } from 'react';
import { Button1, Button2, Button3, Button4 } from './buttons';

export default class App extends Component{
    render(){
        return(
            <Fragment>
                <Button1/>
                <Button2/>
                <Button3/>
                <Button4/>
            </Fragment>
        );
    }
}