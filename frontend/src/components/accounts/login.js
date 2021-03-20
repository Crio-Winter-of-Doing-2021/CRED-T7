import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';


export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state.username[0], this.state.password[0])
        this.props.login(this.state.username, this.state.password)
    };

    render() {
        const { username, password } = this.state
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <div className="col-md-10 m-auto">
                <div className="card card-body mt-5">
                    <form className="p-4" onSubmit={this.onSubmit}>
                        <h2 className="text-center">Login</h2>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Username</label>
                                <input type="text" name="username" value={username} onChange={this.onChange} className="form-control" id="formGroupExampleInput1" placeholder="Enter usename" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Password</label>
                                <input type="password" name="password" value={password} onChange={this.onChange} className="form-control" id="formGroupExampleInput4" placeholder="Enter password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p className="mt-4">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)
