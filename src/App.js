import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './assets/scss/main.scss'
import { AppHeader } from './cmps/app-header';
import { UserMsg } from './cmps/user-msg';
import { WatcherDetalis } from './views/watcher-details';
import { WatcherEdit } from './views/watcher-edit';
import { WatcherIndex } from './views/watcher-index';

function App() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className='container'>
          <Switch>
            <Route path="/watcher/edit/:id?" component={WatcherEdit} />
            <Route path="/watcher/:id" component={WatcherDetalis} />
            <Route path="/" component={WatcherIndex} />
          </Switch>
        </main>
        <footer>
          <section className='container'>
            Eli Shallev 2023 &copy;
          </section>
        </footer>
        <UserMsg/>
      </div>
    </Router>
  );
}

export default App;
