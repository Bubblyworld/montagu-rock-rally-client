import React from 'react';

import DataTable from '../../data_table.js';

export default class ProfileContent extends React.Component {
    render() {
        return <main className='profile-content'>
            <header className='profile-summary'>
                <div className='profile-summary__name'>
                    Guy Paterson-Jones
                </div>

                <div className='profile-summary__email'>
                    guy.paterson.jones@gmail.com
                </div>

                <div className='profile-summary__score'>
                    Score: 1700
                </div>
            </header>

            <DataTable/>
        </main>
    }
}
