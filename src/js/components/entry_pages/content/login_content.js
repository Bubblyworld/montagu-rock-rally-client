import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button.js';
import { Field, Label, Input } from '../../field.js';
import { Form, Block, Footer } from '../../form.js';

export default class LoginContent extends React.Component {
    usernameValue() {
        return document
            .getElementById('login-content__username')
            .value;
    }

    passwordValue() {
        return document
            .getElementById('login-content__password')
            .value;
    }

    sendLogin(password) {
        // Test out the auth stuff.
        var params = '';
        params += 'username=' + this.usernameValue();
        params +='&password=' + this.passwordValue();

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://localhost:8081/login', true);
        xhr.onload = function(err) {
            console.log(xhr.responseText);
        }

        xhr.send(params);
    }

    render() {
        return <div className='login-content'>
            <Form>
                <Block>
                    <Field className='field--40-60'>
                        <Label> Name: </Label>
                        <Input>
                            <input id='login-content__username' type='text'/>
                        </Input>
                    </Field>

                    <Field className='field--40-60'>
                        <Label> Password: </Label>
                        <Input>
                            <input id='login-content__password' type='password'/>
                        </Input>
                    </Field>
                </Block>

                <Footer>
                    <Button className='button--small' onClick={this.sendLogin.bind(this)}>Submit</Button>

                    <Link to='/'>
                        <Button className='button--small'>Cancel</Button>
                    </Link>
                </Footer>
            </Form>
        </div>;
    }
}
