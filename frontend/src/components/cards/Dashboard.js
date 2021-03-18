import React, { Component, Fragment } from 'react';
import Cards from './Cards';
import Form from './Form';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div class="container inline my-5">
                    <div class="col-sm-6 m-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Add a Card</h5>
                                <p class="card-text">Want to add a Card? Click Below</p>

                                <Link to="/addcard">
                                    <button class="btn btn-primary">
                                        <p className="card-text text-light">Add Card</p></button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 m-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">View Your Cards</h5>
                                <p class="card-text">Want to view your cards and manage their statements? Click Below</p>

                                <Link to="/cards"> <button href="" class="btn btn-primary">
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
