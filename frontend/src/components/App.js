import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './cards/Dashboard';
import Favicon from 'react-favicon';


import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Dashboard />
                    <Footer />
                </Fragment>
            </Provider>


        )
    }
}

ReactDom.render(
    <Fragment>
        <Favicon url="https://scrnshts.club/wp-content/uploads/2019/09/icon-3.jpg" />
        <App />
    </Fragment>

    , document.getElementById('app'));