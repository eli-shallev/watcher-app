import { Component } from "react";
import { Link } from "react-router-dom";
import { watcherService } from "../services/watcher.service";
import { RiEdit2Line, RiArrowGoBackFill } from "react-icons/ri";


export class WatcherDetalis extends Component {


    state = {
        watcher: null
    }

    async componentDidMount() {
        const watcherId = this.props.match.params.id
        const watcher = await watcherService.get(watcherId)
        this.setState({ watcher })

    }

    render() {

        const { watcher } = this.state

        if (!watcher) return


        return (
            <section className="watcher-details">
                <div className="content">
                    <div>
                        <h1>{watcher.fullName}</h1>
                        <img className="avatar" src={watcher.avatar} alt="" />
                    </div>
                    <ul className="movies-list">
                        {watcher.movies.map((movie, idx) => {
                            return (
                                <li key={idx}>
                                    <span className="movie-title">{movie.title},</span>
                                    <span className="movie-year"> {movie.year}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <button onClick={() => this.props.history.push('/')} className="btn-return"><RiArrowGoBackFill /></button>
                    <Link className="btn-edit" to={`/watcher/edit/${watcher.id}`}><RiEdit2Line /></Link>
                </div>
            </section>
        )
    }
}