import { Component } from "react";
import { connect } from 'react-redux';
import { loadWatchers, removeWatcher, saveWatcher } from '../store/watcher.actions';
import { WatcherList } from "../cmps/watcher-list";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { RiAddCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

class _WatcherIndex extends Component {

    componentDidMount() {
        this.props.loadWatchers()
    }

    onRemoveWatcher = async (watcherId)=>{
        try {
            await this.props.removeWatcher(watcherId)
            showSuccessMsg('Watcher Removed')
        } catch (err) {
            showErrorMsg('Cannot remove watcher')
        }
    }


    render() {
        const { watchers } = this.props
        return (
            <section className="watcher-index">
                <h1 className="title">MyWatchers</h1>
                <Link to='/watcher/edit'>
                <button className="btn-add"><RiAddCircleFill/> New watcher</button>
                </Link>
                <WatcherList watchers={watchers} onRemoveWatcher={this.onRemoveWatcher} />
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