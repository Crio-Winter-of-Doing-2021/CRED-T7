import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Header extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <span>
                            <img className="img-fluid mr-1 d-inline-block align-center " width="30" src="https://scrnshts.club/wp-content/uploads/2019/09/icon-3.jpg"></img>
                            CRED
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav pl-4">
                            <li className="nav-item m-1">
                                <a className="nav-link" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item m-1">
                                <a className="nav-link" href="">Add Card</a>
                            </li>
                            <li className="nav-item m-1">
                                <a className="nav-link" href="">View Cards</a>
                            </li>
                            <li className="nav-item m-1">
                                <Link to="/register" className="nav-link" href="">Register</Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link to="/login" className="nav-link" href="">Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
