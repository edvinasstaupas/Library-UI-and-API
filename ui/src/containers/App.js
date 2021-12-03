import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import {createTheme, CssBaseline, makeStyles, ThemeProvider} from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import Page from './Pages/Page';
import {Provider} from 'react-redux';
import reduxStore from '../state/store';
import ErrorBoundary from "./Pages/ErrorBoundary/ErrorBoundary";
import {green} from "@material-ui/core/colors";

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
            <ErrorBoundary>
                    <BrowserRouter>
                        <div className={useStyles().container}>
                            <CssBaseline/>
                            <Header/>
                            <Page/>
                            <Footer/>
                        </div>
                    </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
