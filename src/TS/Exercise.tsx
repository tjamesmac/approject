import React, { Component } from 'react';

interface IProps {
}
interface IState {
}

export const Exercise = (props: {reps: number, sets: number, name: string})  => {
    let reps = props.reps;
    let sets = props.sets;
    let name = props.name;
    let together = `${sets}x${reps} - ${name}`
    return (
        <div>{together}</div>
    )
}
 

export default Exercise;
