import React, { Component } from 'react';

interface IProps {

}
interface IState {

}

export class Workout extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)

    }
    render() {
        return (
            <div>
                <h2>Hello, choose your workout.</h2>
                <select>

                    <option value="">Select a workout</option>
                    <option value="push">Push</option>
                    <option value="pull">Pull</option>
                    <option value="legs">Legs</option>
                </select>
            </div>
        );
    }
}

export default Workout;
