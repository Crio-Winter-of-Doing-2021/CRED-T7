import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cards from "../images/cards.jpg";
import banks from "../images/banks.jpg";
import Footer from '../layout/Footer';

export class Home extends Component {
    render() {
        return (
        <div className="bg-black min-h-screen">
    {/* <div className="container mx-auto pl-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span className="font-bold uppercase txt-xl text-yellow-400">
                Hello there!
            </span>
            <h1 className="font-bold text-6xl sm:text-6xl text-white leading-tight mt-4">
                Welcome to CRED
                <br/>
            </h1>
            <h2 className="font-bold text-4xl sm:text-4xl text-white mt-4">
            Manage your credit cards easily now
            </h2>
            <Link to="/dashboard" className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                Discover
            </Link>
            <img className="img-fluid d-inline-block ml-16" src={cards}></img>
        </div>
    </div> */}
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
                <img src={cards} className="img-fluid d-inline-block  rounded-3xl "/>
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
    <div className="">
    <div className="row">
    <img src={`//logo.clearbit.com/hdfcbank.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/hsbc.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/pnbindia.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>

    <img src={`//logo.clearbit.com/icicibank.com?size=80`} className="rounded-sm mb-2 mx-2 img-fluid"/>
    <img src={`//logo.clearbit.com/rblbank.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/tatacapital.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>

    </div>
    <div className="row mx-3">
    <img src={`//logo.clearbit.com/bobibanking.com?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/indianbank.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/unionbankofindia.co.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    
    <img src={`//logo.clearbit.com/citibank.co.in?size=80`} className="rounded-sm mb-2 mx-2 img-fluid"/>
    <img src={`//logo.clearbit.com/indianbank.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    <img src={`//logo.clearbit.com/bajajfinserv.in?size=80`} className="rounded-sm mb-2 mr-2 img-fluid"/>
    </div>
    </div> 
    </div>
</div>
    <div className="py-10 container">
    <button href="/swagger" className="bg-white hover:bg-gray-100 block py-3 px-4 self-center m-auto rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                <a href="/swagger">
                Swagger API Docs
                    </a>
    </button>
    </div>
    
<footer class="bottom-0 bg-gray-900 fixed left-0 right-0 sticky-bottom dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Components
                    </h2>
                    <ul>
                        <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Elements
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Contacts
                    </h2>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Customization
                    </h2>
                </div>
            </li>
        </ul>
        <div class="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <a href="#">
                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</footer>

</div>
        )
    }
}

export default Home;
