import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cards from "../images/cards.jpg";
import banks from "../images/banks.jpg";
import Footer from '../layout/Footer';
import chart from '../images/chart_example.png';
import transactions from '../images/transactions_sample.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/fontawesome-free-solid'

export class Home extends Component {
    componentDidMount(){
        document.title="Home"
    }
    render() {
        return (
            <Fragment>
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
                                    <p className="text-sm sm:text-base ext-md mt-4 font-medium text-gray-400">
                                        Management of your credit cards made much easier. View all your cards and get reminders for bill payments.
                                </p>
                                    <div className="flex mt-8">
                                        <Link to="/dashboard" replace className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
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
                        <div className="dark:bg-gray-800 pb-5 container md:pl-12">
                            <div className="w-full py-6 z-20 rounded-md">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                                    <span className="block text-white">
                                        Insight into your card
                                 </span>
                                </h2>
                                <div className="inline-block">
                                    <p className="text-md mt-4 font-medium text-gray-400 w-1/2">
                                        Who are the top vendors that you have paid for using you debit card?
                                        Pie charts to help present the top ten vendors you've been using along with
                                        a table showing total number of transactions made for them.
                                </p>
                                    <div className="pr-5 py-3 max-w-2xl float-right">
                                        <img src={chart} className="img-fluid rounded-xl shadow-lg"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:bg-gray-800 pb-5 container md:pl-12">
                            <div className="w-full py-6 z-20 rounded-md">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl float-right">
                                    <span className="block text-white">
                                        Summarized Transactions
                                 </span>
                                </h2>
                                <div className="inline-block">
                                    <p className="text-md mt-4 font-medium text-gray-400 w-1/2 mb-3 float-right">
                                        Wanna look back at all the transactions you made last summer?
                                        No worries, you won't have to skip through all the transactions to reach there.
                                        We got you covered.
                                </p>
                                    <div className="py-3 pl-5">
                                        <img src={transactions} className="rounded-xl py-3 sm:text-center img-fluid float-left shadow-lg"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:bg-gray-800 pb-5 w-3/5 flex justify-items-center container md:pl-12">
                            <div className="w-full py-6 z-20 rounded-md container ">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl items-center">
                                    <span className="text-white">
                                        Rewards for You
                                 </span>
                                </h2>
                                <div className="">
                                    <p className="text-md mt-4 font-medium text-gray-400 w-1/2 mb-3">
                                        Another reason to pay those pending bills on time. Coins for you on timely payments.
                                        </p>
                                        <p className="float-right py-5 w-1/3 h-auto text-8xl">
                                            <FontAwesomeIcon icon={faCoins} color="yellow" />
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                        <div className="p-5 w-48 ">
                            <div className="text-xs uppercase text-gray-500 font-medium">Home</div>
                            <Link className="my-3 block" to="/">Homepage <span className="text-teal-600 text-xs p-1"></span></Link>
                            <Link className="my-3 block" to="/dashboard">Dashboard <span className="text-teal-600 text-xs p-1"></span></Link>
                            <Link className="my-3 block" to="/addcard">Add a Card<span className="text-teal-600 text-xs p-1"></span></Link>
                            <Link className="my-3 block" to="/cards">View Cards<span className="text-teal-600 text-xs p-1"></span></Link>
                        </div>
                        <div className="p-5 w-48 ">
                            <div className="text-xs uppercase text-gray-500 font-medium">Project</div>
                            <a className="my-3 block" href="//www.github.com/Crio-Winter-of-Doing-2021/CRED-T7">Repository to Project <span className="text-teal-600 text-xs p-1"></span></a>
                            <a className="my-3 block" href="/swagger">Swagger Docs <span className="text-teal-600 text-xs p-1"></span></a>
                        </div>
                        <div className="p-5 w-48 ">
                            <div className="text-xs uppercase text-gray-500 font-medium">About us</div>
                            <p className="my-3 block font-medium">Cred T-7</p>
                            <ul>
                                <li><p className="my-3 block">Aditya Mahajan (aditya.m.1997@gmail.com)</p></li>
                                <li><p className="my-3 block">Shantanu Singh (shantanusingh1069@gmail.com)</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 pt-2 ">
                    <div className="flex pb-5 px-3 m-auto pt-1 border-t text-gray-800 text-sm flex-col
                    md:flex-row max-w-6xl">
                        <div className="mt-2">© Copyright 2021. All Rights Reserved.</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;
