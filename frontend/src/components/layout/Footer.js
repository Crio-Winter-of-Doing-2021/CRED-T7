import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <footer class="bg-black dark:bg-gray-800 min-h-full w-full py-8">
                <div class="max-w-screen-xl mx-auto px-4">
                    <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                        <li class="my-2">
                            <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                                FAQ
                </a>
                        </li>
                        <li class="my-2">
                            <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                                Configuration
                </a>
                        </li>
                        <li class="my-2">
                            <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                                Github
                </a>
                        </li>
                        <li class="my-2">
                            <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                                LinkedIn
                </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
