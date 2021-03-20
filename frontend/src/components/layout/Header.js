import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav pl-4">
                <li className="nav-item m-1">
                    <a className="nav-link text-light" aria-current="page" href="">Home</a>
                </li>
                <li className="nav-item m-1">
                    <button className="nav-link btn">
                        <Link className="text-light" style={{ textDecoration: "none" }} to="/addcard"> Add Card</Link></button>
                </li>
                <li className="nav-item m-1">
                    <button className="nav-link btn">
                        <Link className="text-light" style={{ textDecoration: "none" }} to="/cards">View Cards </Link></button>
                </li>
                <li className="nav-item m-1">
                    <button onClick={this.props.logout} className="nav-link btn text-light" >Logout</button>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav pl-4">
                <li className="nav-item m-1">
                    <Link to="/register" className="nav-link" href="">Register</Link>
                </li>
                <li className="nav-item m-1">
                    <Link to="/login" className="nav-link" href="">Login</Link>
                </li>
            </ul>
        )
        return (
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <span>
                            <img className="img-fluid mr-1 d-inline-block align-center " width="30" src="https://scrnshts.club/wp-content/uploads/2019/09/icon-3.jpg"></img>
                            CRED
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)