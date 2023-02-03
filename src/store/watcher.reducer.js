export const SET_WATCHERS = 'SET_WATCHERS'
export const ADD_WATCHER = 'ADD_WATCHER'
export const REMOVE_WATCHER = 'REMOVE_WATCHER'
export const UPDATE_WATCHER = 'UPDATE_WATCHER'

const INITIAL_STATE = {
    watchers: [],
    selectedWatcher: null
}

export function watcherReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case SET_WATCHERS:
            return {
                ...state,
                watchers: action.watchers
            }
        case ADD_WATCHER:
            return {
                ...state,
                watchers: [...state.watchers, action.watcher]
            }
        case REMOVE_WATCHER:
            return {
                ...state,
                watchers: state.watchers.filter(watcher => watcher._id !== action.watcherId)
            }
        case UPDATE_WATCHER:
            return {
                ...state,
                watchers: state.watchers.map(watcher => watcher._id === action.watcher._id ? action.watcher : watcher)
            }

        default:
            return state
    }

}