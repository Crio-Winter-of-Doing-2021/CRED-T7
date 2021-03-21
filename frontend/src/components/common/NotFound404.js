import React, { Component } from 'react';

export class NotFound404 extends Component {
    render() {
        return (
            <div className="card card-body text-center mt-5 bg-dark text-light container">
                <p>Oops, wrong page requested.</p><a className="text-light" href="#">Go Back Home</a>
            </div>
        )
    }
}

export default NotFound404
