import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getCard } from '../../actions/card';
import { Link } from "react-router-dom";

export class Card extends Component {
    static propTypes = {
        getCard: PropTypes.func.isRequired,
        card: PropTypes.object
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            // console.log(this.props.match.params.id)
            const id = this.props.match.params.id;
            this.props.getCard(id);
        }
        else {
            alert("Error Occured");
        }
    }

    render() {
        let card = null
        let pay = null
        if (this.props.card) {
            console.log("Credit", this.props.card.credit)
            card = <form onSubmit={this.onSubmit} className="bg-white mt-6 w-1/2 shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container" >
                <p className="h3 pb-3">Your Card</p>
                <div className="row py-1">
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput">Credit Card Number</label>
                        <p>
                            {this.props.card.card_number}
                        </p>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput">Name on the card</label>
                        <p>
                            {this.props.card.owner_name}
                        </p>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput">CVV</label>
                        <p>
                            {this.props.card.cvv}
                        </p>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput">Expiry Month and Year</label>
                        <p>
                            {`${this.props.card.expiry_date_month}/${this.props.card.expiry_date_year}`}
                        </p>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput2">Bank Name</label>
                        <p>
                            {this.props.card.bank}
                        </p>
                    </div>
                </div>
            </form>
            if (this.props.card.credit > 0.00) {
                pay = <button type="button" className="py-2 px-4  bg-black hover:bg-indigo-900
            text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md 
           focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                    Pay Bill
       </button>
            }
            else {
                pay = <button type="button" title="No cards added yet." disabled=" " className="btn bg-green-600 cursor-not-allowed">
                    <p className="card-text text-light">No pending bills to pay. Chill out!</p>
                </button>
            }

        }
        else {
            card = <div className="bg-black text-gray-100 mt-6 w-1/2 shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container">
                No card to show here. <Link to="/cards" className="hover:bg-white">Go Back</Link>
            </div>
        }


        return (
            <div>
                <div className="flex justify-center">
                    {card}
                </div>
                <div className="flex justify-center">
                    {pay}
                </div>
            </div>


        )
    }
}

const mapStateToProps = state => ({
    card: state.card.card
})

export default connect(mapStateToProps, { getCard })(Card)
