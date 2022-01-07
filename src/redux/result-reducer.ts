const initialState = 0

export const resultReducer =
    (state = initialState, action: ActionType): number => {
        switch (action.type) {
            case "CLICK-INC":
                return state
            case "CLICK-RESET":
                return state
            default:
                return state
        }
    }

type clickIncAT = {
    type: "CLICK-INC"
}

type clickResetAT = {
    type: "CLICK-RESET"
}

export type ActionType = clickIncAT | clickResetAT


export const clickIncAC = (): clickIncAT => {
    return {
        type: "CLICK-INC"
    }
}

export const clickResetAC = (): clickResetAT => {
    return {
        type: "CLICK-RESET"
    }
}