import React, { Component } from 'react';

export class NotFound404 extends Component {
    render() {
        return (
            <div className="container pt-5">
                <div class="bg-dark w-full font-mono flex flex-col items-center mt-5" style={{ borderRadius: "25px" }}>
                    <h1 class="font-extrabold text-4xl text-center text-white leading-tight mt-4">
                        You&#x27;re alone here
                    </h1>
                    <p class="font-extrabold text-8xl mt-40 text-white animate-bounce">
                        404
                    </p>
                </div>
            </div>

        )
    }
}

export default NotFound404
