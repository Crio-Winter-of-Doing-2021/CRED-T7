import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <div className="d-flex flex-column align-items-end">
                <div className="wrapper flex-grow-1"></div>
                <footer class="container">
                    <p class="float-right"><a href="#">Back to top</a></p>
                    <p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </footer>
            </div>
        )
    }
}

export default Footer
