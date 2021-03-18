import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards } from '../../actions/cards';


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
                <div className="card card-body m-3">
                    <table className="container table table-hover table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Card-Number</th>
                                <th scope="col">Bank Name</th>
                                <th scope="col">Expiry</th>
                                <th scope="col">Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cards.map(card => (
                                <tr key={card.id}>
                                    <td>{card.card_number}</td>
                                    <td>{card.bank}</td>
                                    <td>{`${card.expiry_date_month}/${expiry_date_year}`}</td>
                                    <td>{card.credit}</td>
                                    <td><button className="btn btn-info btn-sm">View Statement</button></td>
                                </tr>
                            ))}
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr><tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr><tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr><tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
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
