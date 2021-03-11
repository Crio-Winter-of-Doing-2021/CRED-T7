import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';

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
        const [year, month] = expiry[0].split('-');
        const card = { card_number, owner_name, bank, cvv, month, year };
        this.props.addCard(card);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="card card-body p-4 m-5 container" >
                <h2>Add Card</h2>
                <div className="row py-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput">Credit Card Number</label>
                        <input type="text" onChange={this.onChange}
                            name="card_number" maxLength="16"
                            className="form-control" id="formGroupExampleInput4" placeholder="Enter Credit Card No." />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput">Name on the card</label>
                        <input type="text" onChange={this.onChange}
                            name="owner_name" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput">CVV</label>
                        <input type="text" onChange={this.onChange} width="3px"
                            maxLength="3" name="cvv" className="form-control" id="formGroupExampleInput3" placeholder="Enter CVV" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput">Expiry Month and Year</label>
                        <input type="month" onChange={this.onChange} name="expiry" className="form-control" id="formGroupExampleInput5" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput2">Bank Name</label>
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
