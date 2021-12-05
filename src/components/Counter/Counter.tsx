import React, {Dispatch, SetStateAction} from "react";
import {ValueType} from "../../App";
import {Button} from "../Button/Button";

type PropsType = {
    //valueMin: number
    //valueMax: number
    result: number
    warning: string | null
    error: string | null
    value: ValueType
    setResult: (result: number) => void
}

export const Counter = (props: PropsType) => {

    const clickInc = () => {
        let total = props.result < props.value["max"] ? props.result + 1 : props.value["max"];
        props.setResult(total)
    }
    const clickReset = () => {
        props.setResult(props.value["min"])
    }
    const onOffDisableInc = () => {
        return props.result === props.value["max"] || !!props.warning || !!props.error
    }
    const onOffDisableReset = () => {
        return props.result === props.value["min"] || !!props.warning || !!props.error
    }

    return (
        <div className="counter">
            <div className="scoreboard">

                {
                    props.error
                        ? <div className="error">{props.error}</div>
                        : props.warning
                        ? <div className="warning">{props.warning}</div>
                        : <div className={"totalClassName"}>{props.result}</div>
                }


            </div>

            <div className="buttons">
                <Button clickHandler={clickInc} onOffDisable={onOffDisableInc} name="inc" className="button-inc"/>
                <Button clickHandler={clickReset} onOffDisable={onOffDisableReset} name="reset"
                        className="button-reset"/>
            </div>
        </div>

    )
}