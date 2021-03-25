import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards } from '../../actions/cards';
import { Link } from "react-router-dom";

export class Cards extends Component {
    static propTypes = {
        cards: PropTypes.array.isRequired,
        getCards: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCards();
    }

    render() {
        return (
            <Fragment>
                <h3 className=" text-center pt-5 font-bold text-2xl">Cards</h3>
                <div className="flex justify-center">
                    <div className="py-8">
                        <div className="">
                            <div className="inline-block min-w-full shadow rounded-lg ">
                                <table className="container font-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Card Number
                            </th>
                                            <th scope="col" className="px-5 py-3 bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Bank Name
                            </th>
                                            <th scope="col" className="px-5 py-3 bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Expiry
                            </th>
                                            <th scope="col" className="px-5 py-3 bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Credit
                            </th>
                                            <th scope="col" className="px-5 py-3 bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cards.map(card => (
                                            <tr key={card.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p>{card.card_number}
                                                    </p></td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p>{card.bank}
                                                    </p></td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p>{`${card.expiry_date_month}/${card.expiry_date_year}`}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p>{card.credit}
                                                    </p></td>
                                                <td className="border-b border-gray-200">
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
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards
});

export default connect(mapStateToProps, { getCards })(Cards);
