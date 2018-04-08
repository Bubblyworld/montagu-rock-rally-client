import React from 'react';

import { Form, Block, Footer } from '../../form.js';
import { Field, Label, Input } from '../../field.js';
import DropDown from '../../drop_down.js';
import Radio from '../../radio.js';
import Button from '../../button.js';

export default class SendContent extends React.Component {
    render() {
        return <div className='send-content'>
            <Form>
                <Block>
                    <Field className='field--40-60'>
                        <Label> Crag: </Label>
                        <Input>
                            <DropDown/>
                        </Input>
                    </Field>

                    <Field className='field--40-60'>
                        <Label> Wall: </Label>
                        <Input>
                            <DropDown/>
                        </Input>
                    </Field>

                    <Field className='field--40-60'>
                        <Label> Route: </Label>
                        <Input>
                            <DropDown/>
                        </Input>
                    </Field>
                </Block>

                <Block>
                    <Field className='field--40-60'>
                        <Label> Style: </Label>
                        <Input>
                            <Radio
                                name='send-content-radio'
                                options={[
                                    { label: 'onsight', value: 'onsight' },
                                    { label: 'flash', value: 'flash' },
                                    { label: 'redpoint', value: 'redpoint' }
                                ]}
                                defaultValue='onsight'
                            />
                        </Input>
                    </Field>
                </Block>

                <Footer>
                    <Button className='button--small'> Submit </Button>
                </Footer>
            </Form>
        </div>;
    }
}
