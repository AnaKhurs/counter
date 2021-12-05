import {Result} from "../Result/Result";
import {Button} from "../Button/Button";
import React, {useState} from "react";

type PropsType = {
    valueMax: number
    valueMin: number
    result: number
    setResult: (result: number) => void
    warning: string | null
    error: string | null
}

export const Counter = ({valueMax, valueMin, result, setResult, ...props}: PropsType) => {

    let lsValueMin = valueMin;
    const vMin = localStorage.getItem("valueMin")
    if (vMin) {
        lsValueMin = JSON.parse(vMin)
    }

    const clickInc = () => {
        result < valueMax ? result++ : result = valueMax;
        setResult(result);
    }

    const clickReset = () => {
        lsValueMin && setResult(lsValueMin)
        if (lsValueMin===0){
            setResult(0)
        }
    }

    const onOffDisableInc = () => {
        return result === valueMax || !!props.warning
    }


    const onOffDisableReset = () => {
        return result === lsValueMin || !!props.warning
    }

    return (
        <div className="counter">
            <div className="scoreboard">

                {
                    props.error
                        ? <div className="error">{props.error}</div>
                        : props.warning
                        ? <div className="warning">{props.warning}</div>
                        : <Result total={result} valueMax={valueMax} valueMin={valueMin}/>
                }


            </div>

            <div className="buttons">
                <Button clickHandler={clickInc}
                        onOffDisable={onOffDisableInc}
                        result={result}
                        name="inc"
                        className="button-inc"
                />
                <Button clickHandler={clickReset}
                        onOffDisable={onOffDisableReset}
                        result={result}
                        name="reset"
                        className="button-reset"
                />
            </div>
        </div>

    )
}