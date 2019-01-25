import React, { Component } from 'react';
import { Exercise } from './Exercise';
import { Workout } from './Workout';


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

export class Planner extends Component<IProps, IState> {
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
        // need to pull these out and make them
        // components
        if (workout === 'pull') {
            working = 
                <Workout name={"Pull"}>
                    <Exercise sets={1} reps={5}  name={'Deadlifts'} />
                    <Exercise sets={3} reps={8}  name={'Pulldowns'} />
                    <Exercise sets={3} reps={8}  name={'seated cable rows'} />
                    <Exercise sets={5} reps={15}  name={'face pulls'} />
                    <Exercise sets={4} reps={8}  name={'hammer curls'} />
                    <Exercise sets={4} reps={8}  name={'dumbell curls'} />
                </Workout>
        }
        else if (workout === 'push') {
            working = 
                <Workout name={"Push"}>
                    <Exercise sets={4} reps={5}  name={'bench press'} />
                    <Exercise sets={3} reps={8}  name={'overhead press'} />
                    <Exercise sets={3} reps={8}  name={'incline dumbell press'} />
                    <Exercise sets={3} reps={8}  name={'triceps pushdowns'} />
                    <Exercise sets={3} reps={8}  name={'overhead triceps extension'} />
                </Workout>
        }
        else if (workout === 'legs') {
            working = 
                <Workout name={"Legs"}>
                    <Exercise sets={3} reps={5}  name={'Squat'} />
                    <Exercise sets={3} reps={8}  name={'Romanian Deadlift'} />
                    <Exercise sets={3} reps={8}  name={'leg press'} />
                    <Exercise sets={3} reps={8}  name={'leg curls'} />
                    <Exercise sets={3} reps={8}  name={'calf raises'} />
                </Workout>
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

export default Planner;
