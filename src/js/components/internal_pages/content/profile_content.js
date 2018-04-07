import React from 'react';
import { Textfit } from 'react-textfit';

import { DataTable, Row } from '../../data_table.js';

export default class ProfileContent extends React.Component {
    render() {
        return <div className='profile-content'>
            <div className='profile-card'>
                <div className='profile-card__name'>
                    <Textfit mode='single'>
                        <span>Guy Paterson-Jones</span>
                    </Textfit>
                </div>

                <div className='profile-card__email'>
                    <Textfit mode='single'>
                        guy.paterson.jones@gmail.com
                    </Textfit>
                </div>

                <div className='profile-card__score'>
                    Score: 1700
                </div>

                <div className='profile-card__data-table'>
                    <DataTable/>
                </div>
            </div>
        </div>
    }
}
