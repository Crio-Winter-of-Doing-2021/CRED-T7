import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from "react-router-dom";
import { getCards } from '../../actions/cards';
import { Link } from "react-router-dom";
import { pay } from '../../actions/pay';



class Pay extends Component{
    state = {
        amount: ''
    }

    static propTypes = {
        getCard: PropTypes.func.isRequired,
        card: PropTypes.object
    }

    // componentDidMount() {
    //     if (this.props.match.params.id) {
    //         console.log("ComponentMounted");
    //         const id = this.props.match.params.id;
    //         this.props.getCard(id);
    //     }
    //     else {
    //         alert("Error Occured");
    //     }
    // }

    // onChange = e => this.setState({
        
    //     [e.target.name]: [e.target.value]
    // });

    // onSubmit = e => {
    //     e.preventDefault();
    //     this.props.pay(id);
    //     console.log("CompoenentSubmitted");
    //     this.props.history.push("/");
    // };

    render() {
        // const formSubmitted = this.state.formSubmitted;
        console.log("rendering")
        // console.log(this.state.cards.credit)

        return (
            <form onSubmit={this.onSubmit} className="card card-body p-4 m-5 container" >
                <h2>Add Money</h2>

                <div className="row py-3">
                    <div className="form-group col-md-6">
                        <input value={this.state.amount} type="text" onChange={this.onChange} 
                            name="credit" 
                            className="form-control" id="formGroupExampleInput4" placeholder="Enter Amount" />
                    </div>
                    
                </div>
                <div className="d-flex justify-content-left">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = state => ({
    card: state.card.card
})


export default connect(mapStateToProps, { pay })(Pay)


