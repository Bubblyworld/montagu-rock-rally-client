import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import EntryPage from './components/entry_pages/entry_page.js';
import InternalPage from './components/internal_pages/internal_page.js';

export default class App extends React.Component {
    render() {
        return <div>
            {/* Testing testing: */}
            <Link to='/internal/profile'><button>Profile</button></Link>
            <Link to='/internal/scoreboard'><button>Score</button></Link>
            <Link to='/internal/send'><button>Send</button></Link>

            <Switch>
                <Route path='/internal' component={InternalPage}/>
                <Route path='/' component={EntryPage}/>
            </Switch>
        </div>;
    }
}
