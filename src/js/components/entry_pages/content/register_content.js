import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button.js';
import Field from '../../field.js';

export default class RegisterContent extends React.Component {
    render() {
        return <div className='register-content'>
            <div className='register-content__field'>
                <Field
                    className='field--40-60'
                    label={<span> Name: </span>}
                    input={<input type="text"/>}
                />
            </div>

            <div className='register-content__buttons'>
                <Button className='button--small'>Register</Button>
                <Link to='/'>
                    <Button className='button--small'>Cancel</Button>
                </Link>
            </div>
        </div>
    }
}
