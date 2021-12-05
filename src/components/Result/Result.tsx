import React, {useState} from 'react';
import './../../App.css';

type ResultPropsType = {
    total: number
    valueMax: number
    valueMin: number
}


export const Result = ({valueMin, valueMax, ...props}: ResultPropsType) => {

    const totalClassName = `result ${props.total === valueMax ? "redResult" : "defResult"}`

    return (
        <div>
            <div className={totalClassName}>{props.total}</div>
        </div>
    );
}

