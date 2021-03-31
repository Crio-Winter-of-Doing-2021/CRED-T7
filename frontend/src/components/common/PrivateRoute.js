import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auth.isLoading) {
                return <div className="flex justify-center p-5">
                    <p class="font-extrabold text-2xl mt-24 text-black animate-bounce">
                        Loading...Please Wait
                    </p>
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