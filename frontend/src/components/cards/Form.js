import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';
import { Redirect, withRouter } from "react-router-dom";

export class Form extends Component {
    state = {
        card_number: '',
        owner_name: '',
        bank: null,
        cvv: '',
        expiry: '',
    }

    banks = ['Allahabad Bank', 'American Express', 'Andhra Bank', 'Axis Bank', 
    'Bajaj Finserv', 'Bank of Baroda', 'Bank of India', 'Bank of Maharashtra', 'Canara Bank', 
    'Central Bank of India', 'Citibank', 'DCB Bank', 'Federal Bank', 'HDFC', 'HSBC Bank', 'ICICI Bank',
     'IDBI Bank', 'Indian Bank', 'IndusInd Bank', 'Kotak Mahindra Bank', 
     'Nainital Bank', 'Punjab National Bank', 'RBL Bank', 'SBI', 'Standard Chartered Bank', 
    'Tata Capital', 'UCO Bank', 'Union Bank of India', 'Vijaya Bank', 'YES Bank']

    static propTypes = {
        addCard: PropTypes.func.isRequired,
        error: PropTypes.object,
        message: PropTypes.object,
    }

    onChange = e => this.setState({
        [e.target.name]: [e.target.value]
    });

    changeBank = (bank,e) =>{
        e.preventDefault();
        this.setState(
            {
                ...this.state,
                bank:bank.bank
            }
        )
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const { card_number, owner_name, bank, cvv, expiry } = this.state;
        let [expiry_date_year, expiry_date_month] = ['', ''];
        let card = {};
        if (expiry) {
            [expiry_date_year, expiry_date_month] = expiry[0].split('-');
        }
        card = { "card_number": card_number[0], "owner_name": owner_name[0], "bank": bank, "cvv": cvv[0], expiry_date_month, expiry_date_year };
        this.props.addCard(card);
        console.log(!this.props.error.msg && this.props.message && this.props.message.addCard);
        if(!this.props.error.msg && this.props.message && this.props.message.addCard){
            window.location.href = `#/cards`
        }
    };

    render() {
        const { card_number, owner_name, banks, cvv, expiry } = this.state;
        // console.log(this.state.bank)
        const dropdown = <div className="btn-group">
        <button type="button" id="bank_button" className="btn btn-primary font-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.bank||'Select Bank'}
        </button>
        <div className="dropdown-menu overflow-scroll h-52">
            {/* <a className="dropdown-item" onClick= {(e) => this.changeBank(e)}>Not mentioned</a>
            <div className="dropdown-divider">
            </div> */}
          {this.banks.map(bank =>(
                <a key={bank} className="dropdown-item" value={bank} onChange={this.onChange}
                 onClick= {(e) => this.changeBank({bank},e)}>{bank}</a>
            ))}
        </div>
            
      </div>

        return (
            <div className="flex justify-center w-auto">
                <form onSubmit={this.onSubmit} className="bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container w-auto" >
                    <h2 className="text-2xl font-semibold">New Card</h2>
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
                            <div className="">
                        {dropdown}
                        </div>
                        </div>
                        
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(null, { addCard })(Form);
