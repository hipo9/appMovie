import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppMovies } from './AppMovies'
import './styles/app.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppMovies />
    </React.StrictMode>,
)
