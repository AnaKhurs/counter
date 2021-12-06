import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {ValueType} from "../../App";
import {Button} from "../Button/Button";

type PropsType = {
    valueMin: number
    valueMax: number
    setValueMax: (valueMax: number) => void
    setValueMin: (valueMin: number) => void
    setResult: (result: number) => void
    value: ValueType
    setValue: Dispatch<SetStateAction<ValueType>>
    error: string | null
    setWarning: Dispatch<SetStateAction<string | null>>
    setError: Dispatch<SetStateAction<string | null>>
}

export const SettingValue = (props: PropsType) => {

    const changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMax = Number(e.currentTarget.value)
        props.setValueMax(newValueMax)

        if (newValueMax > props.valueMin) {
            props.setWarning("enter values and press set")
        }
        if (newValueMax <= props.valueMin) {
            props.setError("Incorrect value!")
        }
        if (newValueMax > props.valueMin && props.valueMin >= 0) {
            props.setError(null)
        }
    }

    const changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMin = Number(e.currentTarget.value)
        props.setValueMin(newValueMin)

        if (newValueMin >= 0) {
            props.setWarning("enter values and press set")
        }
        if (newValueMin < 0 || newValueMin === props.valueMax) {
            props.setError("Incorrect value!")
        }
        if (newValueMin >= 0 && props.valueMax > newValueMin) {
            props.setError(null)
        }
    }


    const onClickSetHandler = () => {
        props.setValue({['max']: props.valueMax, ['min']: props.valueMin})
        props.setResult(props.valueMin)
        props.setWarning(null)
        localStorage.setItem("valueMin", JSON.stringify(props.valueMin))
        localStorage.setItem("valueMax", JSON.stringify(props.valueMax))
    }

    const onOffDisableSet = () => {
        return (
            !!props.error ||
            props.valueMax === props.value['max'] && props.valueMin === props.value['min']
        )
    }

    const resultClassNameInputMaxValue = props.valueMax <= props.valueMin || props.valueMax <= 0 ? "inputError" : "input"
    const resultClassNameInputMinValue = props.valueMin < 0 ? "inputError" : "input"

    return (
        <div className="settingValue">
            <div className="values">
                <div className="value">
                    <div className="divValue">max value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMaxValue}
                           value={props.valueMax}
                           onChange={changeValueMax}
                    />
                </div>
                <div className="value">
                    <div className="divValue">min value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMinValue}
                           value={props.valueMin}
                           onChange={changeValueMin}/>
                </div>
            </div>
            <div>
                <Button clickHandler={onClickSetHandler}
                        onOffDisable={onOffDisableSet}
                        name="set"
                        className="button-set"
                />
            </div>
        </div>
    )
}