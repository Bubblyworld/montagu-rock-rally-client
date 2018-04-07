import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Button.js';

export default class FrontContent extends React.Component {
    render() {
        return <div className='front-content'>
            <div className='front-content__button'>
                <Link to='/login'>
                    <Button>Login</Button>
                </Link>
            </div>

            <div className='front-content__button'>
                <Link to='/register'>
                    <Button>Register</Button>
                </Link>
            </div>
        </div>
    }
}
