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
    handleWorkout(workout: any) {
        this.setState({
            workout: workout.target.value
        })
    }
    render() {
        let working;
        let workout: string = this.state.workout;
        if (workout === 'push') {
            working = <h2>Push</h2>
        }
        else if (workout === 'pull') {
            working = <h2>Pull</h2>
        }
        else if (workout === 'legs') {
            working = <h2>Legs</h2>
        }
        console.log(this.state.workout);
        return (
            <div>
                <h2>Hello, choose your workout.</h2>
                <Select action={(e: string) => this.handleWorkout(e)} />
                {working}
            </div>
        );
    }
}

export default Workout;
