import React, { Component, Fragment } from 'react';
import Cards from './Cards';
import Form from './Form';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="container inline my-5">
                    <div className="col-sm-6 m-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add a Card</h5>
                                <p className="card-text">Want to add a Card? Click Below</p>

                                <Link to="/addcard">
                                    <button className="btn btn-primary">
                                        <p className="card-text text-light">Add Card</p></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Your Cards</h5>
                                <p className="card-text">Want to view your cards and manage their statements? Click Below</p>

                                <Link to="/cards"> <button href="" className="btn btn-primary">
                                    <p className="card-text text-light">View Cards</p>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Dashboard
