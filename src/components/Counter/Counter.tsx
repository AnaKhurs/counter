import React from "react";
import {ValueType} from "../../App";
import {Button} from "../Button/Button";

type PropsType = {
    result: number
    warning: string | null
    error: string | null
    value: ValueType
    setResult: (result: number) => void
}

export const Counter = ({
                            result,
                            warning,
                            error,
                            value,

                            ...props
                        }: PropsType) => {

    const clickInc = () => {
        let total = result < value["max"] ? result + 1 : value["max"];
        setResult(total)
    }
    const clickReset = () => {
        setResult(value["min"])
    }
    const onOffDisableInc = () => {
        return result === value["max"] || !!warning || !!error
    }
    const onOffDisableReset = () => {
        return result === value["min"] || !!warning || !!error
    }

    const totalClassName = `result ${result === value["max"] ? "redResult" : "defResult"}`

    const renderScoreBoard = () => {
        if (error) {
            return <div className="error">{error}</div>
        }
        if (warning) {
            return <div className="warning">{warning}</div>
        } else {
            return <div className={totalClassName}>{result}</div>
        }
    }

    return (
        <div className="counter">
            <div className="scoreboard">

                {renderScoreBoard()}

            </div>

            <div className="buttons">
                <Button clickHandler={clickInc} onOffDisable={onOffDisableInc} name="inc" className="button-inc"/>
                <Button clickHandler={clickReset} onOffDisable={onOffDisableReset} name="reset"
                        className="button-reset"/>
            </div>
        </div>

    )
}