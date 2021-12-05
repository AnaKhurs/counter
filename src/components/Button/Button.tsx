import React from 'react';
import './../../App.css';

type IncButtonPropsType = {
    clickHandler: () => void
    onOffDisable: () => boolean
    name: string
    className:string
}

export const Button = (props: IncButtonPropsType) => {

    return (
        <button disabled={props.onOffDisable()} className={props.className} onClick={props.clickHandler}>{props.name}</button>
    );
}

