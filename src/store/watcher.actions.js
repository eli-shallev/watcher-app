import { watcherService } from "../services/watcher.service"
import { ADD_WATCHER, REMOVE_WATCHER, SET_WATCHERS, UPDATE_WATCHER } from "./watcher.reducer"

export function loadWatchers() {

    return async (dispatch) => {
        try {
            const watchers = await watcherService.query()
            dispatch({ type: SET_WATCHERS, watchers })
        } catch (err) {
            console.log('Had issues loading watchers', err)
            throw err
        }
    }
}

export function removeWatcher(watcherId) {

    return async (dispatch) => {
        try {
            const watchers = await watcherService.remove(watcherId)
            dispatch({ type: REMOVE_WATCHER, watcherId })
            return watcherId
        } catch (err) {
            console.log('Had issues Removing watcher', err)
            throw err
        }
    }
}

export async function saveWatcher(watcher) {

    return async (dispatch) => {
        try {
            const type = (watcher._id) ? UPDATE_WATCHER : ADD_WATCHER
            const savedWatcher = await watcherService.save(watcher)
            dispatch({ type, watcher: savedWatcher })
            return savedWatcher
        } catch (err) {
            console.error('Had issues saving watcher', err)
            throw err
        }
    }
}