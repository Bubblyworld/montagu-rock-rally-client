import React from 'react';
import { Route, Link } from 'react-router-dom';

import Nav from './nav/nav.js';
import ProfileContent from './content/profile_content.js';
import ScoreboardContent from './content/scoreboard_content.js';
import SendContent from './content/send_content.js';

export default class InternalPage extends React.Component {
    render() {
        return <div className='internal-page'>
            <Nav/>

            <Route path={this.props.match.url + '/profile'} component={ProfileContent}/>
            <Route path={this.props.match.url + '/scoreboard'} component={ScoreboardContent}/>
            <Route path={this.props.match.url + '/send'} component={SendContent}/>

            {/* Testing testing */}
            <Link to='/'><button>Home</button></Link>
        </div>
    }
}
