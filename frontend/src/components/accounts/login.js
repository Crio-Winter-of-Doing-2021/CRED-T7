import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
    state = {
        username: '',
        password: '',
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
        const { username, password } = this.state
        return (
            <div className="col-md-10 m-auto">
                <div className="card card-body mt-5">
                    <form className="p-4" onSubmit={this.onSubmit}>
                        <h2 className="text-center">Login</h2>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Name</label>
                                <input type="text" name="username" value={username} onChange={this.onChange} className="form-control" id="formGroupExampleInput1" placeholder="Enter the Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Confirm Password</label>
                                <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" id="formGroupExampleInput4" placeholder="Type Password again" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p className="mt-4">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
