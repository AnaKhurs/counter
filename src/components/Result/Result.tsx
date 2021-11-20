import React from 'react';
import './../../App.css';

type ResultPropsType = {
    total: number
    valueMax: number
}


export const Result = ({valueMax, ...props}: ResultPropsType) => {

    const totalClassName = `result ${props.total === valueMax ? "redResult" : "defResult"}`

    return (
        <div className={totalClassName}>{props.total}</div>
    );
}

