import React, { Component } from 'react';

interface IProps {
    name: number | string;
    handleClick?: any
}
export class Button extends Component<IProps> {
  render() {
    return (
        <div>
            <button onClick={() => this.props.handleClick(this.props.name)}>{this.props.name}</button>
            {/* <button onClick={() => this.props.handleClick(this.props.name)} > button </button> */}
        </div>
    );
  }
}