import React, { Component } from 'react'
import {
    LoginWrapper,
    LoginTitle,
    LoginInput,
    Input,
    Button
} from './style'
import {loginIn} from './../../common/header/store/action'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Login extends Component {
    render() {
        let {loginIn,login}=this.props;
        if(login){
            return(<Redirect to="/"/>)
        }
        return (
            <LoginWrapper>
                <LoginTitle>
                    登录
                </LoginTitle>
                <LoginInput>
                    <Input key="0" placeholder="用户名" ref={(res)=>this.userName=res}/>
                    <Input key="1" placeholder="密码" ref={(res)=>this.userPass=res}/>
                </LoginInput>
                <Button onClick={()=>loginIn(this.userName.value,this.userPass.value)}>登录</Button>
            </LoginWrapper>
        )
    }
    login=(userName,userPass)=>{
        console.log("name",userName);
        console.log("pass",userPass)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(["header","login"])
    }
}
export default connect(mapStateToProps,{loginIn})(Login)