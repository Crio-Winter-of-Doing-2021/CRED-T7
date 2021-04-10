import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cards from "../images/cards.jpg";
import banks from "../images/banks.jpg";
import Footer from '../layout/Footer';

export class Home extends Component {
    render() {
        return (
            <div className="bg-black min-h-screen">
                <div className="container bg-black mx-auto">
                    <div className="pl-6 md:px-12 relative z-10 flex items-center">
                        <div className="container mx-auto px-6 flex relative py-12">
                            <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                                <span className="h-2 w-3/6 bg-gray-800 dark:bg-white mb-12">
                                </span>
                                <h1 className="font-bebas-neue text-white uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white">
                                    CRED
                </h1>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-white">
                                    Management of your credit cards made much easier. View all your cards and get reminders for bill payments.
                </p>
                                <div className="flex mt-8">
                                    <Link to="/dashboard" className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                                        Discover
                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sm:block sm:w-1/3 lg:w-3/5">
                            <img src={cards} className="img-fluid d-inline-block  rounded-3xl " />
                        </div>
                    </div>

                    <div className="bg-black dark:bg-gray-800 container md:pl-12 relative">
                        <div className="w-full py-12 z-20">
                            <h2 className="text-3xl font-extrabold text-white dark:text-white sm:text-4xl">
                                <span className="block">
                                    Banks Supported
            </span>
                            </h2>
                            <p className="text-md mt-4 font-medium text-gray-400">
                                Almost every other bank that offers credit card in our country. Some of them include:
        </p>
                        </div>
                        <div className="pb-5">
                            <div className="row">
                                <img src={`//logo.clearbit.com/hdfcbank.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/hsbc.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/pnbindia.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />

                                <img src={`//logo.clearbit.com/icicibank.com?size=80`} className="rounded-sm mb-2 mx-2 img-fluid" />
                                <img src={`//logo.clearbit.com/rblbank.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/tatacapital.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />

                            </div>
                            <div className="row mx-3 ">
                                <img src={`//logo.clearbit.com/bobibanking.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/indianbank.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/unionbankofindia.co.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />

                                <img src={`//logo.clearbit.com/citibank.co.in?size=80`} className="rounded-sm mb-2 mx-2 img-fluid" />
                                <img src={`//logo.clearbit.com/indianbank.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                                <img src={`//logo.clearbit.com/bajajfinserv.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
