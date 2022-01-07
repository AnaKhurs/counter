/*
export function saveState<T> (key: string, state: T) {
    localStorage.setItem(key, JSON.stringify(state))
}

export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString) {
        state = JSON.parse(stateAsString)
        return state
    } else return null
}*/
