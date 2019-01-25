import React, { Component } from 'react';
import { Button } from './Button';

const Operation = (props: {action: any, name: string}) => {
    return (
        <button onClick={props.action}>{props.name}</button>
    )
}

interface IProps {
}
interface IState {
    input: string
    total: number
}
export class Calculator extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            input: '',
            total: 0,
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
    handleAdd(id: any) {
        let storing = this.state.input;
        let storeNum = parseInt(storing);
        let adding = this.state.total;
        this.setState({
            total: adding + storeNum,
            input: ""
        });
    }

  render() {
    console.log(this.state.input);
    let numbers: string = this.state.input;
    let addition: number = this.state.total;
    return (
        <div>
            <div>This is input</div>
            <div>{numbers}</div>
            <div>This is total</div>
            <div>{addition}</div>
            <Button name={1} handleClick={(e: any) => this.handler(e)}/>
            <Button name={2} handleClick={(e: any) => this.handler(e)}/>
            <Button name={3} handleClick={(e: any) => this.handler(e)}/>
            <Button name={4} handleClick={(e: any) => this.handler(e)}/>
            <Button name={5} handleClick={(e: any) => this.handler(e)}/>
            <Button name={6} handleClick={(e: any) => this.handler(e)}/>
            <Button name={7} handleClick={(e: any) => this.handler(e)}/>
            <Button name={8} handleClick={(e: any) => this.handler(e)}/>
            <Button name={9} handleClick={(e: any) => this.handler(e)}/>
            <Button name={0} handleClick={(e: any) => this.handler(e)}/>
            <Operation name={"Delete"} action={(e: any) => this.handleDelete(e)}/>
            <Operation name={"Addition"} action={(e: any) => this.handleAdd(e)}/>
        </div>
    );
  }
}