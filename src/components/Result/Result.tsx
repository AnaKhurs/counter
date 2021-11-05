import React from 'react';
import './../../App.css';

type ResultPropsType = {
    total: number
}


export const Result = (props: ResultPropsType) => {

    const totalClassName = `result ${props.total === 5 ? "redResult" : "defResult"}`

    return (
        <div className={totalClassName}>{props.total}</div>
    );
}

