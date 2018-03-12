import React from 'react';
import { Route } from 'react-router-dom';

import Footer from './footer/footer.js';
import Header from './header/header.js';
import FrontContent from './content/front_content.js';
import LoginContent from './content/login_content.js';
import RegisterContent from './content/register_content.js';

export default class EntryPage extends React.Component {
    render() {
        return <div className='entry-page'>
            <Header/>

            <Route exact path='/' component={FrontContent}/>
            <Route path='/login' component={LoginContent}/>
            <Route path='/register' component={RegisterContent}/>

            <Footer/>
        </div>
    }
}
