import React, { Component } from 'react';

interface IState {
    date: Date
}
interface IProps {}
export class Clock extends Component<IProps, IState> {
    constructor(props: {timerID: IProps}) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    timerID: any; // This is needed for my whole op to work
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// export default Clock;
