import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Write extends Component {
    render() {
        let {login}=this.props;
        if(!login){
            return(<Redirect to="/login"/>)
        }
        return (
            <div>
                写文章111
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(["header","login"])
    }
}
export default connect(mapStateToProps)(Write)