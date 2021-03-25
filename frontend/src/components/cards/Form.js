import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';
import { Redirect, withRouter } from "react-router-dom";

export class Form extends Component {
    state = {
        card_number: '',
        owner_name: '',
        bank: '',
        cvv: '',
        expiry: '',
    }

    static propTypes = {
        addCard: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]: [e.target.value]
    });

    onSubmit = e => {
        e.preventDefault();
        // console.log(e)
        const { card_number, owner_name, bank, cvv, expiry } = this.state;
        const [expiry_date_year, expiry_date_month] = expiry[0].split('-');
        const card = { "card_number": card_number[0], "owner_name": owner_name[0], "bank": bank[0], "cvv": cvv[0], expiry_date_month, expiry_date_year };
        this.props.addCard(card);
        this.props.history.push("/");
    };

    render() {
        const { card_number, owner_name, bank, cvv, expiry } = this.state;
        const formSubmitted = this.state.formSubmitted;

        return (
            <form onSubmit={this.onSubmit} className="bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container w-auto" >
                <h2 className="text-2xl font-semibold">Add Card</h2>
                <div className="row py-3">
                    <div className="form-group col-md-6">
                        <label className="font-medium" htmlFor="formGroupExampleInput">Credit Card Number</label>
                        <input value={card_number} type="text" onChange={this.onChange}
                            name="card_number" maxLength="16"
                            className="form-control" id="formGroupExampleInput4" placeholder="Enter Credit Card No." />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="font-medium" htmlFor="formGroupExampleInput">Name on the card</label>
                        <input type="text" value={owner_name} onChange={this.onChange}
                            name="owner_name" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="font-medium" htmlFor="formGroupExampleInput">CVV</label>
                        <input type="text" onChange={this.onChange} width="3px"
                            maxLength="3" name="cvv" className="form-control" id="formGroupExampleInput3" placeholder="Enter CVV" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="font-medium" htmlFor="formGroupExampleInput">Expiry Month and Year</label>
                        <input type="month" onChange={this.onChange} name="expiry" className="form-control" id="formGroupExampleInput5" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="font-medium" htmlFor="formGroupExampleInput2">Bank Name</label>
                        <input type="text" onChange={this.onChange} name="bank"
                            className="form-control" id="formGroupExampleInput2" placeholder="Enter name of Bank" />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { addCard })(Form);
