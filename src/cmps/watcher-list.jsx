import { WatcherPreview } from "./watcher-preview"


export function WatcherList({ watchers, onRemoveWatcher }) {



    return (
        <section className="watcher-list simple-cards-grid">
            {watchers.map(watcher => {
               return <WatcherPreview
                    key={watcher.id}
                    watcher={watcher}
                    onRemoveWatcher={onRemoveWatcher}
                />
            })}
        </section>
    )
}