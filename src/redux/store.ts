import {combineReducers, createStore} from "redux";
import {resultReducer} from "./result-reducer";


const rootReducer = combineReducers({
        result: resultReducer
    }
)

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store