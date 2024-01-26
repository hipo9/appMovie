import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppMovies } from './AppMovies'
import './styles/app.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    //<React.StrictMode>


    <Provider store={store}>
        <BrowserRouter>
            <AppMovies />
        </BrowserRouter>
    </Provider>,
    //</React.StrictMode>,
)
