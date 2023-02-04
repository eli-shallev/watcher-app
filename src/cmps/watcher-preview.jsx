import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
export function WatcherPreview({ watcher, onRemoveWatcher }) {


    return (
        <section className="watcher-preview">
            <Link to={`/watcher/${watcher.id}`}>
                <img className="avatar" src={watcher.avatar} alt="" />
            </Link>
            <h3>{watcher.fullName}</h3>
            <button className="btn-remove" onClick={() => onRemoveWatcher(watcher.id)}><RiDeleteBin5Line /></button>
            <Link className="btn-edit" to={`/watcher/edit/${watcher.id}`}><RiEdit2Line /></Link>
        </section>
    )

}