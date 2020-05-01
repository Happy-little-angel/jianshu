import React, { PureComponent } from 'react'

import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from './style'
import * as actionFunction from './store/action'
import {connect} from 'react-redux'
import Tapic from './components/tapic'
import Artical from './components/artical'
import Tuijian from './components/tuijian'
import Author from './components/author'
class Home extends PureComponent {
    toTop(){
        window.scrollTo(0,0)
    }
    render() {
        let {show1}=this.props;
        return (
           <HomeWrapper>
               <HomeLeft>
                   <Tapic/>
                   <Artical/>
               </HomeLeft>
               <HomeRight>
                   <Tuijian/>
                   <Author/>
               </HomeRight>
               {
                   show1? (<BackTop onClick={()=>this.toTop()}>回顶部</BackTop>):" "
                   
               }
              
           </HomeWrapper>
        )
    }
    componentDidMount(){
        let {getHomeList}=this.props;
        let {show,hide}=this.props;
        getHomeList();
        window.addEventListener("scroll",function(e){
            if(document.documentElement.scrollTop>400){
                show()
            }else{
                hide()
            }
        })
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        show1: state.get("home").get("show")
    }
}
export default connect(mapStateToProps,{...actionFunction})(Home)