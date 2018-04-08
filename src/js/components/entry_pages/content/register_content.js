import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button.js';
import { Field, Label, Input } from '../../field.js';
import { Form, Block, Footer } from '../../form.js';

export default class RegisterContent extends React.Component {
    render() {
        return <div className='register-content'>
            <Form>
                <Block>
                    <Field className='field--40-60'>
                        <Label> Name: </Label>
                        <Input>
                            <input type='text'/>
                        </Input>
                    </Field>

                    <Field className='field--40-60'>
                        <Label> Email: </Label>
                        <Input>
                            <input type='email'/>
                        </Input>
                    </Field>
                </Block>

                <Footer>
                    <Button className='button--small'> Register </Button>

                    <Link to='/'>
                        <Button className='button--small'> Cancel </Button>
                    </Link>
                </Footer>
            </Form>
        </div>
    }
}
