import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";

type ValueType = {
    [key: string]: number
}


function App() {

    const [result, setResult] = useState<number>(0)
    const [value, setValue] = useState<ValueType>(
        {
            ['max']: 5,
            ['min']: 0
        }
    )

    useEffect(() => {

        const valueMin = localStorage.getItem("valueMin")
        if (valueMin) {
            const newValueMin = JSON.parse(valueMin)
            setValue({...value, ['max']: newValueMin})
        }

        const valueMax = localStorage.getItem("valueMax")
        if (valueMax) {
            const newValueMax = JSON.parse(valueMax)
            setValue({...value, ['max']: newValueMax})
        }

    }, [])


    const updateMaxMinValue = (valueMax: number, valueMin: number) => {
        setValue({['max']: valueMax, ['min']: valueMin})
    }

    return (
        <div className="App">
            <SettingValue updateMaxMinValue={updateMaxMinValue}/>
            <Counter valueMin={value['min']} valueMax={value['max']} result={result} setResult={setResult}/>
        </div>
    );
}

export default App;


