import React, { Component } from 'react';
import { Button } from './Button';

const Delete = (props: {action: any}) => {
    return (
        <button onClick={props.action}>Delete</button>
    )
}

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
    }
    handler(id: any) {
        this.setState({
            input: this.state.input + `${id}` 
        });
    }
    handleDelete(id: any) {
        let beforeDelete = this.state.input;
        let del = beforeDelete.substr(0, beforeDelete.length - 1);
        this.setState({
            input: del 
        });
    }

  render() {
    console.log(this.state.input);
    let numbers: string = this.state.input;
    return (
        <div>
            <div>{numbers}</div>
            <Button name={1} handleClick={(e: any) => this.handler(e)}/>
            <Button name={2} handleClick={(e: any) => this.handler(e)}/>
            <Button name={3} handleClick={(e: any) => this.handler(e)}/>
            <Button name={4} handleClick={(e: any) => this.handler(e)}/>
            <Button name={5} handleClick={(e: any) => this.handler(e)}/>
            <Button name={6} handleClick={(e: any) => this.handler(e)}/>
            <Button name={7} handleClick={(e: any) => this.handler(e)}/>
            <Button name={8} handleClick={(e: any) => this.handler(e)}/>
            <Button name={9} handleClick={(e: any) => this.handler(e)}/>
            <Delete action={(e: any) => this.handleDelete(e)}/>
        </div>
    );
  }
}