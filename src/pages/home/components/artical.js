import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    ArticalWrapper,
    ArticalItem,
    AutrialTitle,
    AutrialContent,
    AddMore
} from './../style.js'
import {homeaddmore} from './../store/action'
import {Link} from 'react-router-dom'
class Artical extends Component {
    render() {
        let {ArticalList,homeaddmore,page}=this.props;
        console.log("oage",page)
        return (
            <ArticalWrapper>
                {
                    ArticalList.toJS().map((value,index)=>{
                        return(
                            <ArticalItem key={index}>
                                <Link to={"/detial?listId="+value.id}>
                                    <AutrialTitle>
                                        {value.title}
                                    </AutrialTitle>    
                                </Link>
                                <AutrialContent>
                                    {value.content}
                                    <img src={value.imgUrl}  alt=""/>
                                </AutrialContent>
                            </ArticalItem>
                        )
                    })
                }
                <AddMore onClick={()=>homeaddmore(page)}>加载更多</AddMore>
            </ArticalWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ArticalList: state.get("home").get("ArticalList"),
        page:state.get("home").get("page")
    }
}
export default connect(mapStateToProps,{homeaddmore})(Artical)