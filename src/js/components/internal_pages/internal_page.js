import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Nav, Item } from './nav/nav.js';
import ProfileContent from './content/profile_content.js';
import ScoreboardContent from './content/scoreboard_content.js';
import SendContent from './content/send_content.js';

export default class InternalPage extends React.Component {
    render() {
        return <div className='internal-page'>
            <header className='internal-page__header'>
                <Nav>
                    <Link to='/profile'>
                        <Item>
                            Profile
                        </Item>
                    </Link>

                    <Link to='/scoreboard'>
                        <Item>
                                Scoreboard
                        </Item>
                    </Link>

                    <Link to='/send'>
                        <Item>
                                Add Send
                        </Item>
                    </Link>
                </Nav>
            </header>

            <div className='internal-page__content'>
                <Route path={this.props.match.url + '/profile'} component={ProfileContent}/>
                <Route path={this.props.match.url + '/scoreboard'} component={ScoreboardContent}/>
                <Route path={this.props.match.url + '/send'} component={SendContent}/>
            </div>
        </div>
    }
}
