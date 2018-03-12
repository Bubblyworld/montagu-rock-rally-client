import React from 'react';
import { Link } from 'react-router-dom';

export default class FrontContent extends React.Component {
    render() {
        return <main className='front-content'>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            
            <Link to='/register'>
                <button>Register</button>
            </Link>
        </main>
    }
}
