import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './cards/Dashboard';
import Favicon from 'react-favicon';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './accounts/login';
import Register from './accounts/register';
import Form from './cards/Form';
import Cards from './cards/Cards';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/addcard" component={Form} />
                            <Route exact path="/cards" component={Cards} />
                        </Switch>
                    </Fragment>
                </Router>

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