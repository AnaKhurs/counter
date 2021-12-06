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

export const SettingValue = ({
                                 valueMin,
                                 valueMax,
                                 setValueMax,
                                 setValueMin,
                                 setResult,
                                 value,
                                 setValue,
                                 error,
                                 setWarning,
                                 setError,
                                 ...props
                             }: PropsType) => {

    const changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMax = Number(e.currentTarget.value)
        setValueMax(newValueMax)

        if (newValueMax > valueMin) {
            setWarning("enter values and press set")
        }
        if (newValueMax <= valueMin) {
            setError("Incorrect value!")
        }
        if (newValueMax > valueMin && valueMin >= 0) {
            setError(null)
        }
    }

    const changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        const newValueMin = Number(e.currentTarget.value)
        setValueMin(newValueMin)

        if (newValueMin >= 0) {
            setWarning("enter values and press set")
        }
        if (newValueMin < 0 || newValueMin === valueMax) {
            setError("Incorrect value!")
        }
        if (newValueMin >= 0 && valueMax > newValueMin) {
            setError(null)
        }
    }


    const onClickSetHandler = () => {
        setValue({['max']: valueMax, ['min']: valueMin})
        setResult(valueMin)
        setWarning(null)
        localStorage.setItem("valueMin", JSON.stringify(valueMin))
        localStorage.setItem("valueMax", JSON.stringify(valueMax))
    }

    const onOffDisableSet = () => {
        return (
            !!error ||
            valueMax === value['max'] && valueMin === value['min']
        )
    }

    const resultClassNameInputMaxValue = valueMax <= valueMin || valueMax <= 0 ? "inputError" : "input"
    const resultClassNameInputMinValue = valueMin < 0 ? "inputError" : "input"

    return (
        <div className="settingValue">
            <div className="values">
                <div className="value">
                    <div className="divValue">max value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMaxValue}
                           value={valueMax}
                           onChange={changeValueMax}
                    />
                </div>
                <div className="value">
                    <div className="divValue">min value:</div>
                    <input type={"number"}
                           className={resultClassNameInputMinValue}
                           value={valueMin}
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