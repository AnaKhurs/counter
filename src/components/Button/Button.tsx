import React from 'react';
import './../../App.css';

type IncButtonPropsType = {
    clickHandler: () => void
    onOffDisable: () => boolean
    name: string
    className: string
}

export const Button = ({
                           clickHandler,
                           onOffDisable,
                           name,
                           className,
                           ...props
                       }: IncButtonPropsType) => {

    return (
        <button disabled={onOffDisable()} className={className}
                onClick={clickHandler}>{name}</button>
    );
}

