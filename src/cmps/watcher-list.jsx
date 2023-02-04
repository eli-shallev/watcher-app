import { WatcherPreview } from "./watcher-preview"


export function WatcherList({ watchers }) {



    return (
        <section className="watcher-list simple-cards-grid">
            {watchers.map(watcher => {
               return <WatcherPreview
                    key={watcher.id}
                    watcher={watcher}
                />
            })}
        </section>
    )
}