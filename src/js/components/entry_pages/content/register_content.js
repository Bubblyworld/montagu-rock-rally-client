import React from 'react';
import { Link } from 'react-router-dom';

export default class RegisterContent extends React.Component {
    render() {
        return <main className='register-content'>
            Register! etc.

            <Link to='/'>
                <button>Back</button>
            </Link>
        </main>
    }
}
