import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import App from './App';

const rootElement = document.getElementById('root'); // Certifique-se de que o ID é 'root'
const root = ReactDOM.createRoot(rootElement);

root.render( // Use 'root.render' em vez de 'ReactDOM.render'
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);


