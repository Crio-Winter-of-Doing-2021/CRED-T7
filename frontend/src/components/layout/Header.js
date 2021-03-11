import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand col-md-2" href="#">
                        <span>
                            <img className="img-fluid mr-2 d-inline-block align-center " width="45" src="https://scrnshts.club/wp-content/uploads/2019/09/icon-3.jpg"></img>
                            CRED
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Card</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Cards</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
