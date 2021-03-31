import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards } from '../../actions/cards';
import { Link } from "react-router-dom";

export class Cards extends Component {
    state = {
        page: 1
    }

    static propTypes = {
        cards: PropTypes.object.isRequired,
        getCards: PropTypes.func.isRequired,
        isLoaded: PropTypes.bool
    }

    componentDidMount() {
        this.props.getCards(this.state.page);
        // console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state, prevState)
        if (this.state.page !== prevState.page) {
            this.props.getCards(this.state.page);
        }
    }

    render() {
        // console.log("Page", this.state.page, this.props.cards.previous);
        if (this.props.isLoaded == true) {
            return (
                <div>
                    <h3 className=" text-center pt-5 font-bold text-2xl">Cards</h3>
                    <div className="flex justify-center">
                        <div className="py-8">
                            <div className="">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-x-scroll">
                                    <table className="container font-normal">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-5 py-3 text-center  bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                    Card Number
                        </th>
                                                <th scope="col" className="px-5  text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                    Bank
                        </th>
                                                <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                    Expiry
                        </th>
                                                <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                    Outstanding Balance
                        </th>
                                                <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.cards.results.map(card => (
                                                <tr key={card.id}>
                                                    <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                                                        <p>{card.card_number}
                                                        </p></td>
                                                    <td className="px-5  text-center border-b border-gray-200 bg-white text-sm">
                                                        <img title={card.bank} src={`//logo.clearbit.com/${card.bank_domain}`} />
                                                        </td>
                                                    <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                                                        <p>{`${card.expiry_date_month}/${card.expiry_date_year}`}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                                                        <p>₹ {card.credit}
                                                        </p></td>
                                                    <td className="border-b text-center border-gray-200">
                                                        <Link to={`/cards/${card.id}`}>
                                                            <a className="btn btn-info btn-sm mx-3">View Statement</a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button disabled={this.props.cards && this.props.cards.previous == null} onClick={(state) => this.setState({ ...state, page: this.state.page - 1 })} className={`flex items-center p-3 mx-1 transition ease-in 
                duration-200 uppercase  border-2 
                border-gray-900 focus:outline-none ${this.props.cards.previous ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`}>
                            Prev
                    </button>
                        <button disabled={this.props.cards && this.props.cards.next == null} onClick={(state) => this.setState({ ...state, page: this.state.page + 1 })} className={`flex items-center p-3 mx-1 transition ease-in 
                duration-200 uppercase   border-2 
                border-gray-900 focus:outline-none ${this.props.cards.next ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`}>
                            Next
                    </button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-light-blue-400 h-12 w-12"></div>
                        <div class="flex-1 space-y-4 py-1">
                            <div class="h-4 bg-light-blue-400 rounded w-3/4"></div>
                            <div class="space-y-2">
                                <div class="h-4 bg-light-blue-400 rounded"></div>
                                <div class="h-4 bg-light-blue-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards,
    isLoaded: state.cards.isLoaded
});

export default connect(mapStateToProps, { getCards })(Cards);
