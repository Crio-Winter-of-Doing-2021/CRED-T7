import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
    }

    onChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    };

    render() {
        const { username, email, password1, password2 } = this.state

        return (
            <div className="col-md-10 m-auto">
                <div className="card card-body mt-5">
                    <form className="p-4" onSubmit={this.onSubmit}>
                        <h2 className="text-center">Register</h2>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Name</label>
                                <input type="text" name="username" value={username} onChange={this.onChange} className="form-control" id="formGroupExampleInput1" placeholder="Enter the Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput2">Email-id</label>
                                <input type="email" name="email" value={email} onChange={this.onChange} className="form-control" id="formGroupExampleInput2" placeholder="Your Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Password</label>
                                <input type="password" name="password1" value={password1} onChange={this.onChange} className="form-control" id="formGroupExampleInput3" placeholder="Type a Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Confirm Password</label>
                                <input type="password" name="password2" value={password2} onChange={this.onChange} className="form-control" id="formGroupExampleInput4" placeholder="Type Password again" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p className="mt-4">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
