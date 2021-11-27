import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Page from './Pages/Page';
import { Provider } from 'react-redux';
import reduxStore from '../state/store';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    },
}));

function App() {
    return (
        <Provider store={reduxStore}>
            <BrowserRouter>
                <div className={useStyles().container}>
                    <CssBaseline />
                    <Header />
                    <Page />
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
