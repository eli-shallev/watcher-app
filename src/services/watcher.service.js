import { storageService } from "../services/async-storage.service.js"
import { utilService } from "./util.service.js"

const WATCHER_KEY = 'watcherDB'
_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
}

function query() {
    return storageService.query(WATCHER_KEY)
}

function get(watcherId) {
    return storageService.get(WATCHER_KEY, watcherId)
}

function remove(watcherId) {
    return storageService.remove(WATCHER_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(WATCHER_KEY, watcher)
    } else {
        watcher.avatar = `https://robohash.org/${watcher.fullName}`
        return storageService.post(WATCHER_KEY, watcher)
    }
}

function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {
        _createDemoWatchers()
    }
}

function _createDemoWatchers() {
    const watchersFullNames = ['Aang', 'Appa', 'Momo']
    const watchersMovies = [['Avatar', 'Matrix', 'Men In Black'], ['Godfather', 'Lord Of The Rings', 'Shrek'], ['The Fifth Element', 'Rush Hour', 'Pulp Fiction']]

    const watchers = watchersFullNames.map((watchersFullName, i) => {
        const watcher = _createWatcher(watchersFullName, watchersMovies[i])
        return watcher
    })

    utilService.saveToStorage(WATCHER_KEY, watchers)
}

function _createWatcher(fullName, movies) {
    return {
        id: utilService.makeId(),
        fullName,
        movies,
        avatar: `https://robohash.org/${fullName}`
    }

}
