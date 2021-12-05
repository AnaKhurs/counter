import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {Button} from "../Button/Button";
import {Counter} from "../Counter/Counter";

type PropsType = {
    updateMaxMinValue: (valueMax: number, valueMin: number) => void
    setWarning: Dispatch<SetStateAction<string | null>>
    setError: Dispatch<SetStateAction<string | null>>
    error: string | null
    valueMin: number
    valueMax: number
}

export const SettingValue = (props: PropsType) => {

    const [inputValueMax, setInputValueMax] = useState(5)
    const [inputValueMin, setInputValueMin] = useState(0)

    useEffect(() => {
        let newValueMin = localStorage.getItem("valueMin")
        if (newValueMin) {
            setInputValueMin(JSON.parse(newValueMin))
        }
    }, [inputValueMin])

    useEffect(() => {
        let newValueMax = localStorage.getItem("valueMax")
        if (newValueMax) {
            setInputValueMax(JSON.parse(newValueMax))
        }
    }, [inputValueMax])

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        setInputValueMax(newMaxValue)
        localStorage.setItem("valueMax", JSON.stringify(newMaxValue))
        props.setWarning("enter values and press set")
        if (newMaxValue <= inputValueMin) {
            props.setError("Incorrect value!")
        }
        if (newMaxValue > inputValueMin) {
            props.setWarning("enter values and press set")
        }
        if (newMaxValue > inputValueMin && inputValueMin > 0) {
            props.setError(null)
        }

    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(e.currentTarget.value)
        setInputValueMin(newMinValue)
        localStorage.setItem("valueMin", JSON.stringify(newMinValue))
        if (newMinValue < 0 || newMinValue === inputValueMax) {
            props.setError("Incorrect value!")
        }
        if (newMinValue >= 0) {
            props.setWarning("enter values and press set")
        }
        if (newMinValue >= 0 && inputValueMax > newMinValue) {
            props.setError(null)
        }
    }

    const onClickSetHandler = () => {
        props.updateMaxMinValue(inputValueMax, inputValueMin)
        props.setWarning(null)
    }

    const resultClassNameInputMaxValue = inputValueMax <= inputValueMin || inputValueMax <= 0 ? "inputError" : "input"
    const resultClassNameInputMinValue = inputValueMin < 0 ? "inputError" : "input"

    const onOffDisableSet = () => {
        return (
            !!props.error ||
            inputValueMax === props.valueMax && inputValueMin === props.valueMin
        )
    }


    return (
        <div className="settingValue">
            <div className="values">
                <div className="value">
                    <div className="divValue">max value:</div>
                    <input type={"number"} className={resultClassNameInputMaxValue} value={inputValueMax}
                           onChange={changeMaxValue}/>
                </div>
                <div className="value">
                    <div className="divValue">min value:</div>
                    <input type={"number"} className={resultClassNameInputMinValue} value={inputValueMin}
                           onChange={changeMinValue}/>
                </div>
            </div>
            <div>
                <Button clickHandler={onClickSetHandler}
                        onOffDisable={onOffDisableSet}
                        name={"set"}
                        className="button-set"/>
            </div>
        </div>
    )
}