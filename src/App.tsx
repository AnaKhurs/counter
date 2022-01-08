import React from 'react';
import './App.css';
import {SettingValue} from "./components/SettingValue/SettingValue";
import {Counter} from "./components/Counter/Counter";

function App() {

    return (
        <div className="App">
            <SettingValue/>
            <Counter/>
        </div>
    );
}

export default App;
