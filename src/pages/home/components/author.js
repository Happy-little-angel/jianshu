import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    AuthorWrapper,
    AuthorTitle,
    AuthorSwitch,
    AuthorItem,
    ImgArea,
    AuthorItemTitle
} from './../style'

class Author extends Component {
    render() {
        let {authorList}=this.props;
        return (
            <AuthorWrapper>
                <AuthorTitle>
                    推荐作者
                    <AuthorSwitch>
                        换一换
                    </AuthorSwitch>
                </AuthorTitle>
                    {
                        authorList.toJS().map((value,index)=>{
                            return(
                                    <AuthorItem key={index}>
                                        <ImgArea/>
                                        <AuthorItemTitle>
                                            董克平日记
                                            <span>+关注</span>
                                            <p>
                                            写了934.5k·3.6k喜欢
                                        </p>
                                        </AuthorItemTitle>
                                    </AuthorItem>
                            )
                        })
                    }
            </AuthorWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authorList: state.get("home").get("authorList")
    }
}
export default connect(mapStateToProps)(Author)