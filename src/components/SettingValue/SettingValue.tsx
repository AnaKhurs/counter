import React, {ChangeEvent, Dispatch} from "react";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    ActionType,
    setErrorAC,
    setMessageCounterAC, setResultAC, setValueAC,
    setValueMaxOfSettingsAC,
    setValueMinOfSettingsAC
} from "../../redux/counter-reducer";
import {AppRootStateType} from "../../redux/store";

export const SettingValue = () => {

    const dispatch = useDispatch<Dispatch<ActionType>>()

    const {
        valueMinOfSettings,
        valueMaxOfSettings,
        values,
        error
    } = useSelector<AppRootStateType>(state => state.counter)

    const changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMax = Number(e.currentTarget.value)
        dispatch(setValueMaxOfSettingsAC(newValueMax))

        if (newValueMax > valueMinOfSettings) {
            dispatch(setMessageCounterAC("enter values and press set"))
        }
        if (newValueMax <= valueMinOfSettings) {
            dispatch(setErrorAC("Incorrect value!"))
        }
        if (newValueMax > valueMinOfSettings && valueMinOfSettings >= 0) {
            dispatch(setErrorAC(null))
        }
        if (newValueMax === values.max && valueMinOfSettings === values.min) {
            dispatch(setMessageCounterAC(null))
        }
    }

    const changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMin = Number(e.currentTarget.value)
        dispatch(setValueMinOfSettingsAC(newValueMin))

        if (newValueMin >= 0) {
            dispatch(setMessageCounterAC("enter values and press set"))
        }
        if (newValueMin < 0 || newValueMin === valueMaxOfSettings) {
            dispatch(setErrorAC("Incorrect value!"))
        }
        if (newValueMin >= 0 && valueMaxOfSettings > newValueMin) {
            dispatch(setErrorAC(null))
        }
        if (newValueMin === values.min && valueMaxOfSettings === values.max) {
            dispatch(setMessageCounterAC(null))
        }
    }

    const onClickSetHandler = () => {
        dispatch(setValueAC({max: valueMaxOfSettings, min: valueMinOfSettings}))
        dispatch(setResultAC(valueMinOfSettings))
        dispatch(setMessageCounterAC(null))
        localStorage.setItem("valueMin", JSON.stringify(valueMinOfSettings))
        localStorage.setItem("valueMax", JSON.stringify(valueMaxOfSettings))
    }

    const onOffDisableSet = () => {
        return (
            !!error ||
            valueMaxOfSettings === values.max && valueMinOfSettings === values.min
        )
    }

    const resultClassNameInputMaxValue = valueMaxOfSettings <= valueMinOfSettings || valueMaxOfSettings <= 0 ? "inputError" : "input"
    const resultClassNameInputMinValue = valueMinOfSettings < 0 ? "inputError" : "input"

    return (
        <div className="settingValue">
            <div className="values">
                <div className="value">
                    <div className="divValue">max value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMaxValue}
                           value={valueMaxOfSettings}
                           onChange={changeValueMax}
                    />
                </div>
                <div className="value">
                    <div className="divValue">min value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMinValue}
                           value={valueMinOfSettings}
                           onChange={changeValueMin}/>
                </div>
            </div>
            <div className="buttons">
                <Button clickHandler={onClickSetHandler}
                        onOffDisable={onOffDisableSet}
                        name="set"
                        className="button-set"
                />
            </div>
        </div>
    )
}