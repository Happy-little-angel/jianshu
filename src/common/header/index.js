import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchSwitch,
    SearchItemList,
    SearchItem
} from './style'

import React, { PureComponent} from 'react'
import * as action from './store/action'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {Link,Redirect} from 'react-router-dom'
class Header extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            focus:false
        }
        this.showListArea=this.showListArea.bind(this)
    }
    showListArea(){
        let {focus,searchItemList,page,changePage,totalPage,mouseIn,mouseInOrNot,mouseOut}=this.props;
        let item=[];
        for(var i=page*10;i<(page+1)*10;i++){
            item.push(searchItemList[i])
        }
        if(focus || mouseInOrNot){
            return (
                <SearchInfo onMouseEnter={()=>mouseIn(page,totalPage)} onMouseLeave={()=>mouseOut()}>
                    <SearchInfoTitle>
                        热门推荐
                        <SearchSwitch>
                            <span className="iconfont" ref={(ref)=>this.ref=ref}>&#xe851;</span>
                            <span  onClick={()=>changePage(page,totalPage,this.ref)}>换一换</span>
                        </SearchSwitch>
                    </SearchInfoTitle>
                    <SearchItemList>
                        {   
                            item.map((value,index)=>{
                                return <SearchItem key={index}>{value}</SearchItem>
                            })
                        }
                    </SearchItemList>
                </SearchInfo>
               
            )
        }else{
            return null;
        }
    }
    //若登录可以写文章，否则跳转到登录页米恩
    render() {
        let {focus,focusFun,blurFun,getSearchItemList,searchItemList,login,loginOut}=this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                
                <Nav>
                    <NavItem className="left shou">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {
                        login?<NavItem className="right" onClick={()=>loginOut()}>退出</NavItem>:
                        <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    }
                    <NavItem className="right zuan"><span className="iconfont">&#xe609;</span></NavItem>
                    <NavItem className="right aa"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focus} //in为true时，开始执行动画，被包裹的组件使用 .前缀-enter和.前缀-enter-active
                                       //in为flase时，开始执行动画，被包裹的组件使用 .前缀-exit和.前缀-exit-active
                            timeout={200} //动画执行的时间，和css中transition中的时间保持一致
                            classNames="slide"//设置前缀，注意：classNames[带s]
                        >
                            <NavSearch className={focus?"focused":""} onFocus={()=>{
                                    focusFun();
                                    if(searchItemList.size===0){
                                        getSearchItemList()
                                    }
                                }} onBlur={blurFun}/>
                        </CSSTransition>
                       <span className="iconfont">&#xe62a;</span>
                       {
                           this.showListArea()
                       }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Link to="/write">
                        <Button className="write"><span className="iconfont" >&#xe60d;</span>写文章</Button>
                    </Link>
                    
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // focus: state.get("header").get("focus")
        focus:state.getIn(["header","focus"]),
        searchItemList:state.getIn(["header","searchItemList"]),
        page:state.getIn(["header","page"]),
        totalPage:state.getIn(["header","totalPage"]),
        mouseInOrNot:state.getIn(["header","mouseInOrNot"]),
        login: state.getIn(["header","login"])
    }
}
export default connect(mapStateToProps,{...action})(Header)