import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginContent extends React.Component {
    render() {
        return <main className='login-content'>
            Name: <input type="text"/>
            <button>Submit</button>

            <Link to='/'>
                <button>Back</button>
            </Link>
        </main>
    }
}
