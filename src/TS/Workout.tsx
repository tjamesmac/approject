import React, { Component } from 'react';


const Select = (props: {action?: any}) => {
    return (
        <select onChange={props.action}>
            <option value="">Select a workout</option>
            <option value="push">Push</option>
            <option value="pull">Pull</option>
            <option value="legs">Legs</option>
        </select>
    )
}

interface IProps {

}
interface IState {
    workout: string
}

export class Workout extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            workout: ""
        }
    }
    handleWorkout(workout: string) {
        this.setState({
            workout: workout
        })
    }
    render() {
        return (
            <div>
                <h2>Hello, choose your workout.</h2>
                <Select />
            </div>
        );
    }
}

export default Workout;
