import React, {useState} from 'react';
import './App.css';
import {Result} from "./components/Result/Result";
import {IncButton} from "./components/IncButton/IncButton";
import {ResetButton} from "./components/ResetButton/ResetButton";
import {Button} from "./components/Button/Button";

function App() {

    let [result, setResult] = useState<number>(0)


    const clickInc = () => {
        result < 5 ? result += 1 : result = 5;
        setResult(result);
    }

    const clickReset = () => {
        setResult(0)
    }



    const onOffDisableInc = (result: number) => {
        return result === 5 ? true : false
    }

    const onOffDisableReset = (result: number) => {
       return  result === 0 ? true : false
    }




    return (
        <div className="App">
            <div className="scoreboard">
                <Result total={result}/>
            </div>

            <div className="buttons">
               {/* <IncButton clickInc={clickInc} result={result}/>
                <ResetButton clickReset={clickReset} result={result}/>*/}
                <Button clickHandler={clickInc} onOffDisable={onOffDisableInc} result={result} name="inc" className="inc-reset"/>
                <Button clickHandler={clickReset} onOffDisable={onOffDisableReset } result={result} name="reset" className="button-reset"/>
            </div>

        </div>
    );
}

export default App;
