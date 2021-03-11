import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <div className="d-flex flex-column min-vh-100">
                <div className="wrapper flex-grow-1"></div>
                <footer>
                    <nav className="navbar navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">
                            CRED
                        </a>
                    </nav>
                </footer>
            </div>
        )
    }
}

export default Footer
