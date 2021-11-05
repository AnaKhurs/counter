import React from 'react';
import './../../App.css';

type IncButtonPropsType = {
    clickHandler: () => void
    onOffDisable: (result: number) => boolean
    name: string
    result: number
    className:string
}



export const Button = (props: IncButtonPropsType) => {

    return (
        <button disabled={props.onOffDisable(props.result)} className={props.className} onClick={props.clickHandler}>{props.name}</button>
    );
}

