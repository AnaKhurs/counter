import React from "react";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {ActionType, InitialStateType, setResultAC, ValuesType} from "../../redux/counter-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/store";

export const Counter = () => {

   const dispatch = useDispatch<Dispatch<ActionType>>()
   const {
       values,
       result,
       messageCounter,
       error
   } = useSelector<AppRootStateType, InitialStateType>(state => state.counter)

    const clickInc = () => {
        let total = result < values.max ? result + 1 : values.max;
        dispatch(setResultAC(total))
    }
    const clickReset = () => {
        dispatch(setResultAC(values.min))
    }
    const onOffDisableInc = () => {
        return result === values.max || !!messageCounter || !!error
    }
    const onOffDisableReset = () => {
        return result === values.min || !!messageCounter || !!error
    }

    const totalClassName = `result ${result === values.max ? "redResult" : "defResult"}`

    const renderScoreBoard = () => {
        if (error) {
            return <div className="error">{error}</div>
        }
        if (messageCounter) {
            return <div className="warning">{messageCounter}</div>
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