import React, { Component } from 'react';

export class NotFound404 extends Component {
    render() {
        return (
            <div className="container">
                <div class="w-auto bg-white font-mono flex flex-col card items-center mt-5" style={{ borderRadius: "25px" }}>
                    <h1 class="font-extrabold text-4xl text-center text-black leading-tight mt-4">
                        You&#x27;re alone here
                    </h1>
                    <p class="font-extrabold text-8xl mt-24 text-black animate-bounce">
                        404
                    </p>
                </div>
            </div>

        )
    }
}

export default NotFound404
