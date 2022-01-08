import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../LocalStorage/LocalStorage";

const rootReducer = combineReducers({
        counter: counterReducer
    }
)

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store: Store<AppRootStateType> = createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter
    })
})

// @ts-ignore
window.store = store