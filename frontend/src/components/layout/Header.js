import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import favicon from "../images/favicon.ico"

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        cards: PropTypes.object
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        let viewcards = null
        if (this.props.cards.count > 0) {
            viewcards = <li className="nav-item m-1">
                <a className={`nav-link btn`} >
                    <Link className="text-light" style={{ textDecoration: "none" }} to="/cards">View Cards </Link></a>
            </li>
        }
        else {
            viewcards = <li className="nav-item m-1">
                <a className={`nav-link btn disabled`} >
                    <Link className="text-light" style={{ textDecoration: "none" }} to="/cards">View Cards </Link></a>
            </li>
        }
        const authLinks = (
            <ul className="navbar-nav pl-4">
                <li className="nav-item m-1">
                    <a className="nav-link btn text-light" aria-current="page" href="">Home</a>
                </li>
                <li className="nav-item m-1">
                    <a className="nav-link btn">
                        <Link className="text-light" style={{ textDecoration: "none" }} to="/addcard"> Add Card</Link></a>
                </li>
                {viewcards}
                <li className="nav-item m-1">
                    <a onClick={this.props.logout} className="nav-link btn text-light" >Logout</a>
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
            <nav style={{ margin: "0" }} className="navbar sticky-top navbar-expand-sm navbar-dark bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <span>
                            <img className="img-fluid mr-1 d-inline-block align-center " width="50" src={favicon}></img>
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
    auth: state.auth,
    cards: state.cards.cards
})

export default connect(mapStateToProps, { logout })(Header)
