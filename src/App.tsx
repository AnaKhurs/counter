import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";
import {useDispatch} from "react-redux";

export type ValueType = {
    [key: string]: number
}

function App() {

    /*    const [messageCounter, setMessageCounter] = useState<string | null>(null)
        const [error, setError] = useState<string | null>(null)
        const [result, setResult] = useState<number>(0)
        const [valueMaxOfSettings, setValueMaxOfSettings] = useState<number>(5)
        const [valueMinOfSettings, setValueMinOfSettings] = useState<number>(0)
        const [value, setValue] = useState<ValueType>(
            {
                ['max']: 5,
                ['min']: 0
            }
        )*/

    const dispatch = useDispatch()

    useEffect(() => {
        const valueMax = localStorage.getItem("valueMaxOfSettings")
        const valueMin = localStorage.getItem("valueMinOfSettings")
        if (valueMin && valueMax) {
            const newValueMin = JSON.parse(valueMin)
            const newValueMax = JSON.parse(valueMax)
            setValue({...value, ['max']: newValueMax, ['min']: newValueMin})
            setResult(newValueMin)
            setValueMinOfSettings(newValueMin)
            setValueMaxOfSettings(newValueMax)
        }
    }, [])

    return (
        <div className="App">
            <SettingValue/>
            <Counter/>
        </div>
    );
}

export default App;


