import React from 'react';
import './../../App.css';

type IncButtonPropsType = {
    clickInc: () => void
    result: number
}



export const IncButton = (props: IncButtonPropsType) => {
    return (
        <button disabled={props.result === 5 ? true : false} className="inc-reset" onClick={props.clickInc}>inc</button>
    );
}

