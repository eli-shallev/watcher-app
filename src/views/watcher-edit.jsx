import { Component } from "react";
import { watcherService } from "../services/watcher.service";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";


export class WatcherEdit extends Component {

    state = {
        watcher: watcherService.getEmptyWatcher()
    }

    async componentDidMount() {
        const watcherId = this.props.match.params.id
        if (watcherId) {
            const watcher = await watcherService.get(watcherId)

            this.setState({ watcher })
        }
    }

    hanldeChange = async (ev, multival) => {
        let value
        let field
        if (multival) {
            value = multival
            field = 'movies'
        } else {
            value = ev.target.value
            field = 'fullName'
        }
        this.setState(prevState => ({ watcher: { ...prevState.watcher, [field]: value } }))
    }

    onSubmit = async (ev) => {
        ev.preventDefault()
        try {
            await watcherService.save(this.state.watcher)
            showSuccessMsg(`Watcher ${this.state.watcher.id ? 'updated' : 'added'} successfully`)
            this.props.history.push('/')
        } catch (err) {
            showErrorMsg(`Cannot ${this.state.watcher.id ? 'update' : 'add'} watcher`)
        }
    }

    render() {
        const { watcher } = this.state
        if ((this.props.match.params.id && !watcher.fullName)) return
        return (
            <section className="watcher-edit">
                <h1>{(watcher.id ? 'Update' : 'Create') + ' watcher'}</h1>
                <form onSubmit={this.onSubmit}>

                    <TextField
                        required
                        id="outlined-required"
                        label="Full name"
                        defaultValue={watcher.fullName || null}
                        onChange={this.hanldeChange}
                        sx={{
                            maxWidth: '400px',
                            "& .MuiInputLabel-root": { color: '#FFEBC1' },
                            "& .MuiInputLabel-root.Mui-focused": { color: '#FFEBC1' },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "#FFEBC1",
                                }
                            }
                        }}
                    />

                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={watcherService.getMovies()}
                        getOptionLabel={(option) => option?.title || null}
                        defaultValue={watcher?.movies || null}
                        filterSelectedOptions
                        disableCloseOnSelect
                        onChange={this.hanldeChange}
                        renderInput={(params) => (
                            <TextField
                                sx={{
                                    "& .MuiInputLabel-root": { color: '#FFEBC1' },
                                    "& .MuiInputLabel-root.Mui-focused": { color: '#FFEBC1' },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            borderColor: "#FFEBC1",
                                        }
                                    }
                                }}
                                {...params}
                                label="Select favorite movies"
                                placeholder="Favorite movies"
                            />
                        )}
                    />
                    <div className="btn-container">
                        <button type="submit" className="btn-add">{(watcher.id ? 'Update' : 'Create')}</button>
                        <button onClick={() => this.props.history.push('/')} className="btn-cancel">Cancel</button>
                    </div>
                </form>
            </section>
        )
    }
}