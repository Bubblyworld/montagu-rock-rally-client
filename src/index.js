import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './js/app.js';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,

    document.getElementById('react-mount')
);
