import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    TuijianWrapper,
    TuijianItem,
    TuijianMa,
    TuijianFont
} from '../style'
class Tuijian extends Component {
    render() {
        let {tuijianList}=this.props;
        return (
            <TuijianWrapper>
                {
                    tuijianList.toJS().map((value,index)=>{
                        if(value.id!==5){
                            return <TuijianItem imgUrl={value.imgUrl} key={index}/>
                        }else{
                            return "";
                        }
                        
                    })
                }
                <TuijianMa>
                    {
                        tuijianList.toJS().map((value,index)=>{
                            if(value.id===5){
                                return (
                                    <div key={index}>
                                         <img src={value.imgUrl} alt=""/>
                                        <TuijianFont>
                                            <p>{value.p1}</p>
                                            <p>{value.p2}</p>
                                        </TuijianFont>
                                    </div>
                                )
                            }else{
                                return "";
                            }
                            
                        })
                    }
                </TuijianMa>
            </TuijianWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        tuijianList: state.get("home").get("tuijianList")
    }
}
export default connect(mapStateToProps)(Tuijian)