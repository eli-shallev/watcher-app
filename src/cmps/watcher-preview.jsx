import { RiDeleteBin5Line } from "react-icons/ri";
export function WatcherPreview({ watcher }) {


    return (
        <section className="watcher-preview">
            <img className="avatar" src={watcher.avatar} alt="" />
            <h3>{watcher.fullName}</h3>
            <button className="btn-remove"><RiDeleteBin5Line /></button>
        </section>
    )

}