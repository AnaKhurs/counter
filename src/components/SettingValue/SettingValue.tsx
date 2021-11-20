import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    updateMaxMinValue: (valueMax: number, valueMin:number)=>void
}

export const SettingValue = (props: PropsType) => {

    const [valueMax, setValueMax] = useState(5)
    const [valueMin, setValueMin] = useState(0)

    useEffect(() => {
        let newValueMin = localStorage.getItem("valueMin")
        if (newValueMin) {
            setValueMin(JSON.parse(newValueMin))
        }
    }, [valueMin])

    useEffect(() => {
        let newValueMax = localStorage.getItem("valueMax")
        if (newValueMax) {
            setValueMax(JSON.parse(newValueMax))
        }
    }, [valueMax])

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        setValueMax(newMaxValue)
        localStorage.setItem("valueMax", JSON.stringify(newMaxValue))
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(e.currentTarget.value)
        setValueMin(newMinValue)
        localStorage.setItem("valueMin", JSON.stringify(newMinValue))
    }

    const onClickSetHandler = () => {

        props.updateMaxMinValue(valueMax, valueMin)

    }


    return (
        <div className="settingValue">
            <div className="values">
                <div className="value">
                    <div className="divValue">max value:</div>
                    <input type={"number"} className="input" value={valueMax} onChange={changeMaxValue}/>
                </div>
                <div className="value">
                    <div className="divValue">min value:</div>
                    <input type={"number"} className="input" value={valueMin} onChange={changeMinValue}/>
                </div>
            </div>
            <div>
                <button onClick={onClickSetHandler}>set</button>
            </div>
        </div>
    )
}