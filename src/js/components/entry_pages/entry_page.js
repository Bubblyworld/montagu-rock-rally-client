import React from 'react';

export default class EntryPage extends React.Component {
    render() {
        return <div className='entry-page'>
            <Header/>

            {this.props.content}
            
            <Footer/>
        </div>
    }
}
