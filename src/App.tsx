import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";

export type ValueType = {
    [key: string]: number
}

function App() {

    const [warning, setWarning] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<number>(0)
    const [valueMax, setValueMax] = useState<number>(5)
    const [valueMin, setValueMin] = useState<number>(0)
    const [value, setValue] = useState<ValueType>(
        {
            ['max']: 5,
            ['min']: 0
        }
    )

    useEffect(() => {

        const valueMax = localStorage.getItem("valueMax")
        const valueMin = localStorage.getItem("valueMin")
        if (valueMin && valueMax) {
            const newValueMin = JSON.parse(valueMin)
            const newValueMax = JSON.parse(valueMax)
            setValue({...value, ['max']: newValueMax, ['min']: newValueMin})
            setResult(newValueMin)
            setValueMin(newValueMin)
            setValueMax(newValueMax)
        }
    }, [])

    return (
        <div className="App">
            <SettingValue valueMin={valueMin}
                          valueMax={valueMax}
                          setValueMax={setValueMax}
                          setValueMin={setValueMin}
                          setResult={setResult}
                          value={value}
                          setValue={setValue}
                          error={error}
                          setWarning={setWarning}
                          setError={setError}
            />
            <Counter value={value}
                     setResult={setResult}
                     result={result}
                     warning={warning}
                     error={error}
            />
        </div>
    );
}

export default App;


