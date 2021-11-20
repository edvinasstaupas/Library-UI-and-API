import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Page from './Pages/Page';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    },
}));

function App() {
    return (
        <BrowserRouter>
            <div className={useStyles().container}>
                <CssBaseline />
                <Header />
                <Page />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
