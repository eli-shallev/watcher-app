import { Component } from "react";
import { connect } from 'react-redux';
import { loadWatchers, removeWatcher, saveWatcher } from '../store/watcher.actions';
import { WatcherList } from "../cmps/watcher-list";

class _WatcherIndex extends Component {

    componentDidMount() {
        this.props.loadWatchers()
    }


    render() {
        const { watchers } = this.props
        return (
            <section className="watcher-index">
                <WatcherList watchers={watchers} />
            </section>
        )
    }
}


const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers
})

const mapDispatchToProps = {
    loadWatchers,
    removeWatcher,
    saveWatcher,
}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)