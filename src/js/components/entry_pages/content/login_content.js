import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button.js';
import Field from '../../field.js';
import { Form, Block, Footer } from '../../form.js';

export default class LoginContent extends React.Component {
    render() {
        return <div className='login-content'>
            <div className='login-content__field'>
                <Field
                    className='field--40-60'
                    label={<span> Name: </span>}
                    input={<input type="text"/>}
                />
            </div>

            <div className='login-content__field'>
                <Field
                    className='field--40-60'
                    label={<span> Password: </span>}
                    input={<input type='password'/>}
                />
            </div>

            <div className='login-content__buttons'>
                <Button className='button--small'>Submit</Button>

                <Link to='/'>
                    <Button className='button--small'>Cancel</Button>
                </Link>
            </div>
        </div>;
    }
}
