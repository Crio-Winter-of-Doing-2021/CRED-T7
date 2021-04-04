import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { connect } from "react-redux";
import {createMessage} from '../../actions/messages';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, password1, password2, email } = this.state
        // console.log(password1, password2)
        if(email==''){
            // console.log("true")
            createMessage({emailNotEntered:"Email field can't be left blank."})
        }
        if(password1[0]=='' || password2[0]==''){
            // console.log("true")
            createMessage({passwordNotEntered:"Password field can't be left blank."})
        }
        if (password2[0] !== password1[0]) {
            // console.log(password2,password1)
            createMessage({passwordsDoNotMatch:" Passwords do not match. Try Again."})
        }
        else {
            // console.log("true")
            const password = password1;
            const newUser = { username, password, email };
            // console.log(newUser);
            this.props.register(newUser);
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { username, email, password1, password2 } = this.state

        return (
            <div className="col-md-10 m-auto">
                <div className="card card-body mt-5">
                    <form className="p-4" onSubmit={this.onSubmit}>
                        <h2 className="h2 text-center text-4xl dark:text-red pb-3">Register</h2>
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
                        <p className="mt-4 text-lg">
                            Already have an account? <Link to="/login">Login Here</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { register })(Register)
