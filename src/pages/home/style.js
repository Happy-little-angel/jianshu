import style from 'styled-components'

export const HomeWrapper=style.div`
    width:960px;
    background:#ff0;
    margin:0px auto;
    overflow:hidden
`
export const HomeLeft=style.div`
    width:640px;
    background:#f0f;
    float:left;
    padding:30px 0px 0px 15px;
    box-sizing:border-box;
` 
export const TaplicWrapper=style.div`
   img{
       width:625px;
   }
   margin-bottom:35px;
`
export const ArticalWrapper=style.div`
   background:#00f;
`
export const ArticalItem=style.div`
   padding:15px 2px 20px 0px;
   margin-bottom:15px;
   border-bottom:1px solid #969696;
   background:#986
`
export const AutrialTitle=style.div`
   margin-bottom:4px;
   font-weight:700;
   line-height:1.5;
   font-size:18px;
`
export const AutrialContent=style.div`
   margin-bottom:8px;
   line-height:24px;
   color:#999;
   font-size:13px;
   position:relative;
   padding-right:150px;
   img{
       width:141px;
       position:absolute;
       right:0px;
       top:-24px;
   }
`
export const AddMore=style.button`
   width:625px;
   padding:10 0px;
   box-sizing:border-box;
`
export const HomeRight=style.div`
    width:280px;
    background:#00f;
    float:left;
    margin-left:40px;
`    
export const TuijianWrapper=style.div`
   background:#f00;
   padding-top:30px;
`
export const TuijianItem=style.div`
   width:280px;
   height:50px;
   margin-bottom:6px;
   background:url(${(props)=>props.imgUrl});
   background-size:contain
`
export const TuijianMa=style.div`
   width:234px;
   padding:10px 22px;
   border:1px solid #ccc;
   margin-bottom:30px;
   overflow:hidden;
   img{
        width:60px;
        height:60px;
        float:left
   }
  
`
export const TuijianFont=style.div`
   width:143px;
   float:left;
   font-size:13px;
   margin-left:20px;
   verical-align:middle;
   p{
       line-height:20px;
   }
`
export const AuthorWrapper=style.div`
   background:#0ff;
`
export const AuthorTitle=style.div`

`
export const AuthorSwitch=style.div`
   float:right
`
export const AuthorItem=style.div`
   margin-top:15px;
   overflow:hidden
`
export const ImgArea=style.div`
   width:56px;
   height:56px;
   background:#ccc url("https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp");
   border-radius:100px;
   background-size:contain;
   float:left;
`
export const AuthorItemTitle=style.div`
   float:left;
   background:#f00;
   width:222px;
   font-size:14px;
   padding-top:7px;
   padding-left:10px;
   box-sizing:border-box;
   span{
       display:block;
       color:#969696;
       float:right
   }
   p{
       margin-top:8px;
   }
`
export const BackTop=style.div`
   width:50px;
   height:50px;
   background:#f00;
   position:fixed;
   bottom:10px;
   right:10px;
   line-height:50px;
`