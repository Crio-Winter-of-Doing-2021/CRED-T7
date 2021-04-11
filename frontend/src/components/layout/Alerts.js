import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";
import { clearErrors, clearMessages } from '../../actions/messages';
import { ERROR_CLEAR } from '../../actions/types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
    }
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        // console.log(error, message)
        if (error !== prevProps.error) {
            if (error.msg.bank) {
                alert.error(`Bank: ${error.msg.bank.join(' ')}`)
            }
            if (error.msg.card_number) {
                alert.error(`Card Number: ${error.msg.card_number.join(' ')}`)
            }
            if (error.msg.username) {
                alert.error(`Username: ${error.msg.username.join(' ')}`)
            }
            if (error.msg.password) {
                alert.error(`Password: ${error.msg.password.join(' ')}`)
            }
            if (error.msg.cvv) {
                alert.error(`CVV: ${error.msg.cvv.join(' ')}`)
            }
            if (error.msg.expiry_date_month) {
                alert.error(`Expiry Month: ${error.msg.expiry_date_month.join(' ')}`)
            }
            if (error.msg.expiry_date_year) {
                alert.error(`Expiry Year: ${error.msg.expiry_date_year.join(' ')}`)
            }
            if (error.msg.owner_name) {
                alert.error(`Name on Card: ${error.msg.owner_name.join(' ')}`)
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join(' '))
            }
            if (error.msg.detail && this.props.auth.isAuthenticated) {
                alert.error((" You have been logged out, login again."))
                this.props.logout();
            }
        }
        // console.log(message)
        if (message !== prevProps.message) {
            if (message.addCard) alert.success(message.addCard);
            if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
            if (message.passwordNotEntered) alert.error(message.passwordNotEntered);
            if (message.emailNotEntered) alert.error(message.emailNotEntered);
            if (message.payed) alert.success(message.payed);
            if (message.rewards) alert.success(message.rewards);
            if (message.noPay) alert.error(message.noPay)
        }

        // this.props.dispatch({
        //     type:ERROR_CLEAR,
        // })
        // this.props.dispatch(clearMessages())

    }
    render() {
        return <Fragment />;
    }
}
const mapStateToProps = state => ({
    error: state.errors,
    auth: state.auth,
    message: state.messages
})
export default connect(mapStateToProps, { logout })(withAlert()(Alerts));