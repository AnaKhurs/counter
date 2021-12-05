import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";

type ValueType = {
    [key: string]: number
}


function App() {

    const [warning, setWarning] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
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
            setValue({...value, ['min']: newValueMin})
            setResult(newValueMin)
        }

        const valueMax = localStorage.getItem("valueMax")
        if (valueMax) {
            const newValueMax = JSON.parse(valueMax)
            setValue({...value, ['max']: newValueMax})
        }

    }, [])


    const updateMaxMinValue = (valueMax: number, valueMin: number) => {
        setValue({['max']: valueMax, ['min']: valueMin})
        setResult(valueMin)
    }

    return (
        <div className="App">
            <SettingValue updateMaxMinValue={updateMaxMinValue}
                          setWarning={setWarning}
                          setError={setError}
                          error={error}
                          valueMin={value['min']}
                          valueMax={value['max']}
            />
            <Counter valueMin={value['min']}
                     valueMax={value['max']}
                     result={result}
                     setResult={setResult}
                     warning={warning}
                     error={error}
            />
        </div>
    );
}

export default App;


