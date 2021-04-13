import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import spinner from '../images/spinner.gif';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auth.isLoading) {
                return <div className="flex justify-center p-5">
                    <img src={spinner}>
                    </img>
                </div>

            }
            else if (!auth.isAuthenticated) {
                return <Redirect to="/login" />;
            }
            else {
                return <Component {...props} />;
            }

        }}
    />
);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);