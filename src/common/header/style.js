import style from 'styled-components'
import img1 from '../../static/logo.png' 
export const HeaderWrapper=style.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    font-size:17px;
`
export const Logo=style.div`
    width:100px;
    height:56px;
    background:url(${img1});
    position:absolute;
    left:0px;
    top:0px;
    background-size:100px;
`
export const Nav=style.div`
    width:945px;
    line-height:56px;
    margin:0px auto;
    position:relative;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem=style.div`
    text-align:center;
    line-height:26px;
    box-sizing:border-box;
    padding:15px;
    &.left{
        float:left;
        color:#969696;
    }
    &.shou{
        color:#ea6f5a;
        margin-right:10px;
    }
    &.right{
        float:right;
        margin:0px 6px 0px 10px; 
        color:#969696;
        &.zuan{
            padding:0px 15px;
            line-height:62px;
            height:56px;
            .iconfont{
                font-size:30px;
                color:#ea6f5a;
            }
        }
        &.aa{
            padding:0px 15px;
            line-height:62px;
            height:56px;
            .iconfont{
                font-size:25px;
            }
        }
    }
`
export const SearchWrapper=style.div`
    float:left;
    position:relative;
    background:#ff0;
    margin-left:20px;
    .iconfont{
        position:absolute;
        right:10px;
        top:3px;
        font-size:20px;
        color:#969696
    }
`
export const NavSearch=style.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:36px;
    background:#eee;
    border:none;
    border-radius:20px;
    padding-left:10px;
    box-sizing:border-box;
    outline:none;
    &::placeholder{
        color:#969696;
        font-size:14px;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const SearchInfo=style.div`
    width:250px;
    padding:10px 5px;
    box-sizing:border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#00f;
    position:absolute;
    top:56px;
`
export const SearchInfoTitle=style.div`
    background:#f00;
    line-height:20px;
    font-size:16px;
    color:#969696;
`
export const SearchSwitch=style.div`
    float:right;
    font-size:15px;
    .iconfont{
        right:53px;
        top:11px;
        font-size:14px;
        transition:all 200ms ease-out;
    }
`
export const SearchItemList=style.div`
    margin-top:10px;
    overflow:hidden;
    background:#f0f;
`
export const SearchItem=style.div`
    padding:3px;
    float:left;
    background:#09f;
    line-height:20px;
    margin-right:5px;
    margin-bottom:5px;
    font-size:14px;
    box-sizing:border-box;
    border:1px solid #ccc;
    border-radius:3px;
`
export const Addition=style.div`
    width:205px;
    position:absolute;
    right:20px;
    top:8px;
`

export const Button=style.div`
    float:left;
    padding:11px 15px;
    border:1px solid #ea6f5a;
    box-sizing:border-box;
    border-radius:20px;
    font-size:15px;
    &.reg{
        padding-right:25px;
        padding-left:25px;
        margin-right:20px;
        color:#ea6f5a;
        &:hover{
            background-color: rgba(236,97,73,.05)
        }
    }
    &.write{
        background:#ea6f5a;
        color:#fff;
    }
`