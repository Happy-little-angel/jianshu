import {createGlobalStyle} from 'styled-components'

export const GlobaFontlStyle=createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1587774485085'); /* IE9 */
    src: url('./iconfont.eot?t=1587774485085#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1587774485085') format('woff'),
    url('./iconfont.ttf?t=1587774485085') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1587774485085#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


