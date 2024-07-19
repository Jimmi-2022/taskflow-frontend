import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import ReactQueryProvider from './react-query-client';

ReactDOM.render(
    <React.StrictMode>
        <ReactQueryProvider>
            <App />
        </ReactQueryProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

