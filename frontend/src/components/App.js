import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import NotFound404 from './common/NotFound404';
import Dashboard from './cards/Dashboard';
import Favicon from 'react-favicon';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './accounts/login';
import Register from './accounts/register';
import Form from './cards/Form';
import Cards from './cards/Cards';
import Card from './cards/Card';
import Pay from './cards/Pay';
import { Provider } from 'react-redux';
import store from '../store';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';
import "../style/main.css";
import favicon from "./images/favicon.ico"

class App extends Component {
    componentDidMount() {
        // console.log("mounted");
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <PrivateRoute exact path="/addcard" component={Form} />
                            <PrivateRoute exact path="/cards" component={Cards} />
                            <PrivateRoute exact path="/cards/:id" component={Card} />
                            <PrivateRoute exact path="/cards/:id/pay" component={Pay} />
                            <Route exact path="*" component={NotFound404} />
                        </Switch>
                        {/* <Footer /> */}
                    </Fragment>
                </Router>

            </Provider>
        )
    }
}

ReactDom.render(
    <Fragment>
        <Favicon url={favicon} />
        <App />
    </Fragment>

    , document.getElementById('app'));