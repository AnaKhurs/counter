import React from 'react';
import './../../App.css';

type ResetButtonPropsType = {
    clickReset: () => void
    result: number
}




export const ResetButton = (props: ResetButtonPropsType) => {

    return (
        <button disabled={props.result === 0 ? true : false} className="button-reset" onClick={props.clickReset}>reset</button>
    );
}
