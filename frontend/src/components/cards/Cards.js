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
                <h3 className="p-3">Cards</h3>
                <div className="m-3">
                    <table className="container table table-hover table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Card-Number</th>
                                <th scope="col">Bank Name</th>
                                <th scope="col">Expiry</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cards.map(card => (

                                <tr key={card.id}>
                                    <td>{card.card_number}</td>
                                    <td>{card.bank}</td>
                                    <td>{`${card.expiry_date_month}/${card.expiry_date_year}`}</td>
                                    <td>{card.credit}</td>
                                    <td>
                                        <Link to={`/cards/${card.id}`}>
                                            <a className="btn btn-info btn-sm">View Statement</a>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards
});

export default connect(mapStateToProps, { getCards })(Cards);
