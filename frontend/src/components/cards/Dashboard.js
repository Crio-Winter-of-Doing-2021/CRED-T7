import React, { Component, Fragment } from 'react';
import Cards from './Cards';
import Form from './Form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cards';


export class Dashboard extends Component {


    static propTypes = {
        cards: PropTypes.object.isRequired,
        getCards: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    }

    componentDidMount() {
        this.props.getCards(1);
    }

    render() {
        let ifcards = null;
        // console.log(this.props.cards)
        if (this.props.cards.count > 0 && this.props.cards.results.length > 0) {
            ifcards =
                <Link to="/cards"> <button href="" className="btn btn-primary mt-2">
                    <p className="card-text text-light">View Cards</p>
                </button></Link>
        }
        else {
            ifcards =
                <button type="button" data-toggle="tooltip" data-placement="bottom" title="No cards added yet." disabled=" " className="btn btn-primary cursor-not-allowed">
                    <p className="card-text text-light">View Cards</p>
                </button>
            // console.log(this.props)
        }


        return (
            <Fragment>
                <div className="text-center">
                    <p className="font-semibold h2 mt-10">Welcome Home, {this.props.username}! </p>
                </div>
                <div className="flex justify-center items-center mt-6 ">
                    <div className="sm:flex justify-center items-center text-center gap-14">
                        <div className="w-1/2 h-56 px-4 py-4 bg-white mt-6 hover:bg-indigo-900
             transition ease-in duration-200  shadow-lg rounded-lg dark:bg-gray-800">
                            <h5 className="card-title font-semibold">Add a Card</h5>
                            <p className="card-text">Want to add a Card? Click Below</p>

                            <Link to="/addcard">
                                <button className="btn btn-primary mt-6">
                                    <p className="card-text text-light">Add Card</p></button></Link>
                        </div>
                        <div className="min-w-4 w-1/2 h-56 hover:bg-indigo-900
             transition ease-in duration-200 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                            <h5 className="card-title font-semibold">View Your Cards</h5>
                            <p className="card-text">Want to view your cards and manage their statements? Click Below</p>

                            {ifcards}
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards,
    username: state.auth.user.username
});

export default connect(mapStateToProps, { getCards })(Dashboard);
