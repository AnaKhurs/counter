export type ValuesType = {
    max: number,
    min: number,
}

type InitialStateType = {
    values: ValuesType
    valueMaxOfSettings: number
    valueMinOfSettings: number
    result: number
    messageCounter: string | null
    error: string | null
}

const initialState = {
    values: {
        max: 5,
        min: 0,
    },
    valueMaxOfSettings: 0,
    valueMinOfSettings: 0,
    result: 0,
    messageCounter: null,
    error: null,
}

export const counterReducer =
    (state = initialState, action: ActionType): InitialStateType => {
        switch (action.type) {
            case "SET-ERROR":
            case "SET-MESSAGE-COUNTER":
            case "SET-RESULT":
            case "SET-VALUE":
            case "SET-VALUE-MAX-OF-SETTINGS":
            case "SET-VALUE-MIN-OF-SETTINGS":
            case "SET-INITIAL-STATE":
                return {...state, ...action.payload}
            default:
                return state
        }
    }

type setMessageCounterAT = {
    type: "SET-MESSAGE-COUNTER"
    payload: { messageCounter: string | null }
}

type setErrorAT = {
    type: "SET-ERROR"
    payload: { error: string | null }
}

type setResultAT = {
    type: "SET-RESULT"
    payload: { result: number }
}

type setValueMaxOfSettingsAT = {
    type: "SET-VALUE-MAX-OF-SETTINGS"
    payload: { valueMaxOfSettings: number }
}

type setValueMinOfSettingsAT = {
    type: "SET-VALUE-MIN-OF-SETTINGS"
    payload: { valueMinOfSettings: number }
}

type setValueAT = {
    type: "SET-VALUE"
    payload: { values: ValuesType }
}

type setInitialStateAT = {
    type: "SET-INITIAL-STATE",
    payload: {
        values: ValuesType
        valueMaxOfSettings: number
        valueMinOfSettings: number
        result: number
    }
}

export type ActionType = setMessageCounterAT
    | setErrorAT
    | setResultAT
    | setValueMaxOfSettingsAT
    | setValueMinOfSettingsAT
    | setValueAT
    | setInitialStateAT

export const setMessageCounterAC = (messageCounter: string | null): setMessageCounterAT => {
    return {
        type: "SET-MESSAGE-COUNTER",
        payload: {messageCounter}
    }
}

export const setErrorAC = (error: string | null): setErrorAT => {
    return {
        type: "SET-ERROR",
        payload: {error}
    }
}

export const setResultAC = (result: number): setResultAT => {
    return {
        type: "SET-RESULT",
        payload: {result}
    }
}

export const setValueMaxOfSettingsAC = (valueMaxOfSettings: number): setValueMaxOfSettingsAT => {
    return {
        type: "SET-VALUE-MAX-OF-SETTINGS",
        payload: {valueMaxOfSettings}
    }
}

export const setValueMinOfSettingsAC = (valueMinOfSettings: number): setValueMinOfSettingsAT => {
    return {
        type: "SET-VALUE-MIN-OF-SETTINGS",
        payload: {valueMinOfSettings}
    }
}

export const setValueAC = (values: ValuesType): setValueAT => {
    return {
        type: "SET-VALUE",
        payload: {values}
    }
}

export const setInitialStateAC = (values: ValuesType, valueMaxOfSettings: number, valueMinOfSettings: number, result: number) => {
    return {
        type: "SET-INITIAL-STATE",
        payload: {
            values,
            valueMaxOfSettings,
            valueMinOfSettings,
            result
        }
    }
}




