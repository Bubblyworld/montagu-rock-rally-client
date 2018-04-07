import React from 'react';

export class Nav extends React.Component {
    render() {
        return <div className='nav'>
            <div className='nav__left'>
                {/* todo */}
                <div id='logo'/>
            </div>

            <div className='nav__right'>
                {this.props.children}
            </div>
        </div>;
    }
}

export class Item extends React.Component {
    render() {
        return <div className='nav-item'>
            {this.props.children}
        </div>
    }
}
