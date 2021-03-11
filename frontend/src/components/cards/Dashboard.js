import React, { Component, Fragment } from 'react';
import Cards from './Cards';
import Form from './Form'

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form />
                <Cards />
            </Fragment>
        )
    }
}

export default Dashboard
