import React, { Component } from 'react';

interface IProps {
}
interface IState {
}

export const Workout = (props: {name: string, children: any})  => {

    return (
        <div className="workout">
            <h2>{props.name}</h2>
            {props.children}
        </div>
    )
}
 

export default Workout;
