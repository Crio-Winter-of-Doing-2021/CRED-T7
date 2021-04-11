import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getCard, clearCardData, viewTransactions, viewSmartStatements, viewStatements } from '../../actions/card';
import { Link } from "react-router-dom";
import { pay } from '../../actions/pay';
import { withRouter } from 'react-router';
import { createMessage } from '../../actions/messages';
import { Doughnut } from 'react-chartjs-2';

export class Card extends Component {

    state = {
        pay_amount: '',
        page: 1,
        year: null,
        month: null
    }
    months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    years = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012']

    static propTypes = {
        getCard: PropTypes.func.isRequired,
        clearCardData: PropTypes.func.isRequired,
        card: PropTypes.object,
        transactions: PropTypes.object,
        viewTransactions: PropTypes.func.isRequired,
        pay: PropTypes.func.isRequired,
        viewSmartStatements: PropTypes.func.isRequired,
        smartstatements: PropTypes.object,
        viewStatements: PropTypes.func.isRequired,
        labels: PropTypes.array,
        total_data: PropTypes.array
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            // console.log(this.props.match.params.id)
            const id = this.props.match.params.id;
            this.props.getCard(id);
            this.props.viewTransactions(id, this.state.page);
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
        let temp_JSON = null;
        const { pay_amount, page } = this.state;
        if (!this.state.pay_amount[0] || this.state.pay_amount[0] == '0' || parseFloat(pay_amount) > parseFloat(this.props.card.credit)) {
            alert("Invalid value entered to pay! Try Again")
        }
        else {
            temp_JSON = { "pay_amount": this.state.pay_amount[0],"credit": this.props.card.credit,"lastPayDate":this.props.card.lastPayDate };
            this.props.pay(this.props.card.id, temp_JSON);
            window.location.href = '#/cards/'
        }
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.page, prevState.page)
        if (this.state.page !== prevState.page) {
            const id = this.props.match.params.id;
            this.props.viewTransactions(id, this.state.page);
        }
        else if (this.state.month && this.state.year) {
            const id = this.props.match.params.id;
            // if (prevState.month === null || prevState.year === null) {
            //     this.props.viewStatements(id, this.state.month, this.state.year, this.state.page);
            // }
            if (this.state.month != prevState.month || this.state.year != prevState.year) {
                this.props.viewStatements(id, this.state.month, this.state.year, this.state.page);
            }
        }
        else if (!this.state.month && !this.state.year && (prevState.month || prevState.year)) {
            const id = this.props.match.params.id;
            this.props.viewTransactions(id, this.state.page);
        }
    }

    changeMonth(month, e) {
        e.preventDefault();
        this.setState(
            {
                ...this.state,
                month: month
            }
        )
    }

    changeYear(year, e) {
        e.preventDefault();
        this.setState(
            {
                ...this.state,
                year: year
            }
        )
    }

    clearFilters(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            year: null,
            month: null,
            page: 1
        })
    }

    componentWillUnmount() {
        this.props.clearCardData();
    }

    render() {
        let card = null
        let pay_button = null
        let trans = null
        let smartstates = null
        const { pay_amount } = this.state;
        if (this.props.card) {
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
                pay_button = <form onSubmit={this.onSubmit} className="shadow-lg rounded-xl bg-blue-900 md:w-64 p-6 dark:bg-gray-800 relative overflow-hiddencontainer w-auto" >
                    <p className="text-white text-2xl font-semibold">
                        Pay Now!
                    </p>
                    <div className="row py-3">
                        <div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-black sm:text-sm">
                                        ₹
                                    </span>
                                </div>
                                <input value={pay_amount} type="text" onChange={this.onChange}
                                    name="pay_amount" id="formGroupExampleInput4" className="focus:ring-indigo-500 text-black form-control border-l border-b border-t border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            PAY
                            </button>
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
            card = <div className="bg-black text-gray-100 mt-6 w-1/2 shadow-lg rounded-lg  p-4 m-5 container">No card to show here. <Link to="/cards" className="hover:bg-white" replace>Go Back</Link>
            </div>
        }
        if (this.props.transactions && this.props.transactions.results.length > 0) {
            // console.log(this.props.transactions.results.length)
            trans =
                <div>
                    <div className="shadow rounded-sm table-responsive-sm">
                        <table className="table container font-normal">
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
                    <div className="flex justify-center mt-2">
                        <button disabled={this.props.transactions.results && this.props.transactions.previous == null} onClick={(state) => this.setState({ ...state, page: this.state.page - 1 })} className={`flex items-center p-2 mx-1 transition ease-in 
                    duration-200 uppercase  border-2 
                    border-gray-900 focus:outline-none ${this.props.transactions.previous ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`}>
                            Prev
                        </button>
                        <button disabled={this.props.transactions.results && this.props.transactions.next == null} onClick={(state) => this.setState({ ...state, page: this.state.page + 1 })} className={`flex items-center p-2 mx-3 transition ease-in 
                    duration-200 uppercase   border-2 
                    border-gray-900 focus:outline-none ${this.props.transactions.next ? "hover:bg-gray-800 hover:text-white" : "cursor-not-allowed "}`}>
                            Next
                        </button>
                    </div>
                </div>
        }
        else {
            trans = <div className="container flex justify-center">
                <div className="bg-black text-white mt-6 w-1/2 shadow-lg rounded-lg dark:bg-gray-800 p-4 m-5 container">
                    No transactions to show for this card.
            </div>
            </div>
        }

        if (this.props.smartstatements && this.props.smartstatements.results.length > 0) {
            // console.log(this.props.smartstatements.results.length)
            let pie_data = {
                labels: this.props.labels,
                datasets: [
                    {
                        label: 'Vendors',
                        backgroundColor: [
                            '#B21F00',
                            '#C9DE00',
                            '#2FDE00',
                            '#00A6B4',
                            '#6800B4',
                            '#3f51b5',
                            '#673ab7',
                            '#e91e63',
                            '#00bcd4',
                            '#ff5722'

                        ],
                        hoverBackgroundColor: [
                            '#501800',
                            '#4B5000',
                            '#175000',
                            '#003350',
                            '#35014F',
                            '#1a237e',
                            '#311b92',
                            '#880e4f',
                            '#006064',
                            '#bf360c'
                        ],
                        data: this.props.total_data
                    }
                ]
            }
            // console.log(pie_data, this.props.labels, this.props.total_data);
            smartstates = <div className="">
                <div className="w-full flex-col justify-center container my-5 uppercase text-center text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
                    Top vendors for card
                    <div className="shadow rounded-sm table-responsive-sm pt-3">
                        <table className="table container font-normal">
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
                                    <tr key={transac.vendor}  >
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
                    <div className="py-5 flex justify-center overflow-scroll">
                        <Doughnut
                            data={pie_data}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Pie Chart of Top Vendors by amount (₹)',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        }
        else {
            // console.log(this.props.smartstatements)
            smartstates = null
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
                    <div className="container">
                        <div className="pt-8">
                            <div className="d-flex justify-content-center justify-center pt-5 pb-2">
                                <div className="flex justify-center">
                                    <div className="btn-group px-3">
                                        <button type="button" id="month_button" className="btn bg-black btn-primary font-white dropdown-toggle rounded-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.month || 'Select Month'}
                                        </button>
                                        <div className="dropdown-menu overflow-scroll h-52">
                                            {this.months.map(month => (
                                                <a key={month} className="dropdown-item" value={month} onChange={this.onChange} onClick={(e) => this.changeMonth(month, e)}
                                                >{month}</a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="btn-group px-3">
                                        <button type="button" id="year_button" className="btn bg-black btn-primary font-white dropdown-toggle rounded-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.year || 'Select Year'}
                                        </button>
                                        <div className="dropdown-menu overflow-scroll h-52">
                                            {this.years.map(year => (
                                                <a key={year} className="dropdown-item" onChange={this.onChange} value={year} onClick={(e) => this.changeYear(year, e)}
                                                >{year}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className="items-center">
                                    <button type="button" className="btn btn-primary bg-red-600 hover:bg-red-700 focus:ring-red-500 rounded-lg text-white w-full transition ease-in duration-200 font-semibold shadow-md " onClick={(e) => this.clearFilters(e)}>
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                            {trans}
                        </div>
                    </div>
                </div>
                <div className="container mb-10">
                    {smartstates}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    card: state.card.card,
    transactions: state.card.transactions,
    smartstatements: state.card.smartstatements,
    labels: state.card.labels,
    total_data: state.card.total_data

})

export default connect(mapStateToProps, { getCard, clearCardData, viewTransactions, pay, viewSmartStatements, viewStatements })(withRouter(Card))
