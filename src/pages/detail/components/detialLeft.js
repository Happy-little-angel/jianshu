import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {
    DetialLeftWrapper,
    DetialTitle,
    DetialContent
} from './../style'
import {getDetialList} from './../store/action'
import {connect} from 'react-redux'
class DetialLeft extends Component {
    render() {
        let {arrlist,location}=this.props;
        var url=new URLSearchParams(location.search);
        var listId=url.get("listId")
        return (
           <DetialLeftWrapper>
               {
                   arrlist.map((value,index)=>{
                       if(value.id===listId){
                            return (
                                <div key={index}>
                                    <DetialTitle >
                                        我睡上了那个三十几岁女人的床
                                    </DetialTitle>
                                    <img src="//upload-images.jianshu.io/upload_images/3356997-6b687f4a1850c966.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt=""/>
                                    <DetialContent>
                                        {
                                            value.content
                                        }
                                    </DetialContent>
                                </div>
                            )
                       }else{
                           return ""
                       }
                      
                   })
               }
              
           </DetialLeftWrapper> 
        )
    }
    componentDidMount(){
        let {getDetialList}=this.props;
        getDetialList()
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        arrlist: state.get("detial").get("arrlist")
    }
}
export default connect(mapStateToProps,{getDetialList})(withRouter(DetialLeft))