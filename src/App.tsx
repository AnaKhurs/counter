import React, {Dispatch, useEffect, useState} from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {
    ActionType,
    setResultAC,
    setValueAC,
    setValueMaxOfSettingsAC,
    setValueMinOfSettingsAC, ValuesType
} from "./redux/counter-reducer";
import {AppRootStateType} from "./redux/store";

function App() {

/*    const dispatch = useDispatch<Dispatch<ActionType>>()
    const values = useSelector<AppRootStateType, ValuesType>(state => state.counter.values)

    useEffect(() => {
        const valueMax = localStorage.getItem("valueMaxOfSettings")
        const valueMin = localStorage.getItem("valueMinOfSettings")
        if (valueMin && valueMax) {
            const newValueMin = JSON.parse(valueMin)
            const newValueMax = JSON.parse(valueMax)
            dispatch(setValueAC({...values, max: newValueMax, min: newValueMin}))
            dispatch(setResultAC(newValueMin))
            dispatch(setValueMinOfSettingsAC(newValueMin))
            dispatch(setValueMaxOfSettingsAC(newValueMax))
        }
    }, [])*/

    return (
        <div className="App">
            <SettingValue/>
            <Counter/>
        </div>
    );
}

export default App;
