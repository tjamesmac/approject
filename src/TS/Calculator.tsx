import React, { Component } from 'react';
import { Button } from './Button';

interface IProps {
}
interface IState {
    input: string
}
export class Calculator extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            input: "",
        }
        // this.handler = this.handler.bind(this);
    }
    handler(id: any) {
        this.setState({
            input: this.state.input + `${id}` 
        });
    }

  render() {
    console.log(this.state.input);
    return (
        <div>

            <Button name={1} handleClick={(e: any) => this.handler(e)}/>
            <Button name={2} handleClick={(e: any) => this.handler(e)}/>
            <Button name={3} handleClick={(e: any) => this.handler(e)}/>
        </div>
    );
  }
}