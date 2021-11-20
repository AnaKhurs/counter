import {Result} from "../Result/Result";
import {Button} from "../Button/Button";
import React, {useState} from "react";

type PropsType = {
    valueMax: number
    valueMin: number
    result: number
    setResult: (result: number) => void
}

export const Counter = ({valueMax, valueMin,result, setResult, ...props}: PropsType) => {



    const clickInc = () => {
        result < valueMax ? result++ : result = valueMax;
        setResult(result);
    }

    const clickReset = () => {
        setResult(valueMin)
    }

    const onOffDisableInc = (result: number) => {
        return result === valueMax
    }

    const onOffDisableReset = (result: number) => {
        return result === valueMin
    }

    return (
        <div className="counter">
            <div className="scoreboard">
                <Result total={result} valueMax={valueMax}/>
            </div>

            <div className="buttons">
                <Button clickHandler={clickInc}
                        onOffDisable={onOffDisableInc}
                        result={result}
                        name="inc"
                        className="inc-reset"
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