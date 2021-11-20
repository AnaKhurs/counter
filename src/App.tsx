import React, {useState} from 'react';
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


    //let startMax = JSON.parse(localStorage.getItem('valueMax'))

    //const valueMax = value['max'];
    // const valueMin = value['min'];


    const updateMaxMinValue = (valueMax: number, valueMin: number) => {
        setValue({['max']:valueMax, ['min']:valueMin})


    }

    /*    let [result, setResult] = useState<number>(0)
        let maxValue = 5;
        let minValue = 0;


        const clickInc = () => {
            result < maxValue ? result++ : result = maxValue;
            setResult(result);
        }

        const clickReset = () => {
            setResult(minValue)
        }


        const onOffDisableInc = (result: number) => {
            return result === maxValue
        }

        const onOffDisableReset = (result: number) => {
            return result === minValue
        }*/


    return (
        <div className="App">
            <SettingValue updateMaxMinValue={updateMaxMinValue}/>
            <Counter valueMin={value['min']} valueMax={value['max']} result={result} setResult={setResult}/>
        </div>
    );
}

export default App;


