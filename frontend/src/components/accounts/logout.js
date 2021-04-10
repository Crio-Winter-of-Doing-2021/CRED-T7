import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout } from '../../actions/auth';

class Logout extends Component {

    componentWillMount() {
        this.props.dispatch(logout())
    }

    render() {
        return null
    }
}
Logout.propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
}

export default withRouter(connect()(Logout))