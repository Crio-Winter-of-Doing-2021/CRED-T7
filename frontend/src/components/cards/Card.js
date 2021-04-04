import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getCard, clearCardData, viewTransactions, viewSmartStatements } from '../../actions/card';
import { Link } from "react-router-dom";
import { pay } from '../../actions/pay';
import { withRouter } from 'react-router'; 
import {createMessage} from '../../actions/messages';

export class Card extends Component {

    state= {
        pay_amount: '',
        page: 1
    }

    static propTypes = {
        getCard: PropTypes.func.isRequired,
        clearCardData: PropTypes.func.isRequired,
        card: PropTypes.object,
        transactions: PropTypes.object,
        viewTransactions: PropTypes.func.isRequired,
        pay: PropTypes.func.isRequired,
        viewSmartStatements: PropTypes.func.isRequired,
        smartstatements: PropTypes.object,
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            // console.log(this.props.match.params.id)
            const id = this.props.match.params.id;
            this.props.getCard(id);
            this.props.viewTransactions(id,this.state.page);
            this.props.viewSmartStatements(id);
        }
        else {
            alert("Error Occured");
        }
    }

    onChange = e => this.setState({
        [e.target.name]: [e.target.value]
    });

    onSubmit = e => {
        e.preventDefault();
        let temp_JSON=null;
        const { pay_amount,page } = this.state;
        console.log(this.state.pay_amount)
        if(!this.state.pay_amount[0] || this.state.pay_amount[0]=='0' || parseFloat(pay_amount)>parseFloat(this.props.card.credit)){
            console.log("true")
            alert("Invalid value entered to pay! Try Again")
        }
        else{
            temp_JSON={"pay_amount":this.state.pay_amount[0]};
            this.props.pay(this.props.card.id,temp_JSON);
            window.location.href = '#/cards/'
            // window.location.href = `#/cards/${this.props.card.id}`
            // location.reload();
        }
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.page, prevState.page)
        if (this.state.page !== prevState.page) {
            const id = this.props.match.params.id;
            this.props.viewTransactions(id,this.state.page);
        }
    }

    componentWillUnmount() {
        this.props.clearCardData();
    }

render() { 
        let card = null
        let pay_button = null
        let trans = null
        let smartstates=null
        const { pay_amount } = this.state;
        const formSubmitted = this.state.formSubmitted;
        if (this.props.card) {
            // console.log("Credit", this.props.card.credit)
            // console.log("lol");
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
                        <label className="h5" htmlFor="formGroupExampleInput2">Bank</label>
                        <img title={this.props.card.bank} src={`//logo.clearbit.com/${this.props.card.bank_domain}?size=80`} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="h5" htmlFor="formGroupExampleInput2">Outstanding Balance</label>
                        <p className={this.props.card.credit > 0 ? `text-red-600 font-semibold` : 'text-green-600 font-semibold'}>
                            ₹{this.props.card.credit}
                        </p>
                    </div>
                </div>
            </form>
            if (this.props.card.credit > 0.00) {
                pay_button= <form onSubmit={this.onSubmit} className="bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container w-auto" >
                    <div className="row py-3">
                        <div className="form-group col-md-19">
                            
                            <input value={pay_amount} type="text" onChange={this.onChange}
                                name="pay_amount" 
                                className="form-control" id="formGroupExampleInput4" placeholder="Enter amount" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">PAY</button>
                    </div>
                </form>

            }
            else {
                pay_button = <button type="button" title="No cards added yet." disabled=" " className="btn bg-green-600 cursor-not-allowed">
                    <p className="card-text text-light">No pending bills to pay. Chill out!</p>
                </button>
            }

        }
        else {
            card = <div className="bg-black text-gray-100 mt-6 w-1/2 shadow-lg rounded-lg  p-4 m-5 container">No card to show here. <Link to="/cards" className="hover:bg-white">Go Back</Link>
            </div>
        }

        


        if (this.props.transactions && this.props.transactions.results.length > 0) {
            console.log(this.props.transactions.results.length)
            trans = <div>
                <div className="flex justify-center">
                    <div className="py-8">
                        <div className="">
                            <div className="inline-block min-w-full shadow rounded-lg ">
                                <table className="container font-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 text-center  bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Vendor
                                             </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Type
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Category
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Date
                                             </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Amount
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.transactions.results.map(transac => (
                                            <tr key={transac.id}>
                                                <td className="px-5  text-center border-b border-gray-200 bg-white text-sm">
                                                    <p>{transac.vendor}
                                                    </p></td>
                                                <td className="px-5  text-center border-b border-gray-200 bg-white text-sm">
                                                    <p>{transac.CreditorDebit}
                                                    </p></td>
                                                <td className="px-5  text-center border-b border-gray-200 bg-white text-sm">
                                                    <p>{transac.category}
                                                    </p></td>
                                                <td className="px-5 text-center border-b border-gray-200 bg-white text-sm">
                                                    <p>{`${transac.month}/${transac.year}`}
                                                    </p>
                                                </td>
                                                <td className="px-5  text-center border-b border-gray-200 bg-white text-sm">
                                                    <p>₹ {transac.amount}
                                                    </p></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button disabled={this.props.transactions.results && this.props.transactions.previous == null} onClick={(state) => this.setState({ ...state, page: this.state.page - 1 })} className={`flex items-center p-3 mx-1 transition ease-in 
                    duration-200 uppercase  border-2 
                    border-gray-900 focus:outline-none ${this.props.transactions.previous ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`} onClick={this.onClick}>
                        Prev
                        </button>
                    <button disabled={this.props.transactions.results && this.props.transactions.next == null} onClick={(state) => this.setState({ ...state, page: this.state.page + 1 })} className={`flex items-center p-3 mx-1 transition ease-in 
                    duration-200 uppercase   border-2 
                    border-gray-900 focus:outline-none ${this.props.transactions.next ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`}>
                        Next
                        </button>
                </div>
            </div>
        }
        else {
            trans = <div className="bg-black text-white mt-6 w-1/2 shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container">
                No transactions to show for this card.
            </div>
        }


        if (this.props.smartstatements && this.props.smartstatements.results.length > 0) {
            console.log(this.props.smartstatements.results.length)
            smartstates = <div>
                <div className="flex justify-center">
                    <div className="py-8">
                        <div className="">
                            <div className="inline-block min-w-full shadow rounded-lg ">
                                <table className="table-striped container font-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 text-center  bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Vendor
                                             </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Total Transactions
                                            </th>
                                            <th scope="col" className="px-5 py-3 text-center bg-black  border-b border-gray-200 text-green-000  text-gray-200 text-sm uppercase font-normal">
                                                Total Amount
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.smartstatements.results.map(transac => (
                                            <tr key={transac.id}  >
                                                <td className="px-5 py-3 text-center border-b border-gray-200  text-sm">
                                                    <p>{transac.vendor} 
                                                    </p></td>
                                                <td className="px-5 py-3 text-center border-b border-gray-200  text-sm">
                                                    <p>{transac.total}
                                                    </p></td>
                                                <td className="px-5 py-3 text-center border-b border-gray-200  text-sm">
                                                    <p>₹ {transac.total_amount}
                                                    </p></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        }
        else {
            console.log(this.props.smartstatements)
            smartstates = <div className="bg-black text-white mt-6 w-1/2 shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container">
                No Smart Statements to show for this card.
            </div>
        }
        return (
            <div>
                <div className="flex justify-center">
                    {card}
                </div>
                <div className="flex justify-center">
                    {pay_button}
                </div>
                <div className="flex justify-center">
                    {trans}
                </div>
                <div className="flex justify-center">
                    {smartstates}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    card: state.card.card,
    transactions: state.card.transactions,
    smartstatements: state.card.smartstatements
    
})

export default connect(mapStateToProps, { getCard, clearCardData, viewTransactions, pay, viewSmartStatements })(withRouter(Card))
