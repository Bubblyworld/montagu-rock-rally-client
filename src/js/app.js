import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import EntryPage from './components/entry_pages/entry_page.js';
import InternalPage from './components/internal_pages/internal_page.js';

export default class App extends React.Component {
    render() {
        return <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <Switch>
                <Route path='/internal' component={InternalPage}/>
                <Route path='/' component={EntryPage}/>
            </Switch>
        </div>;
    }
}
