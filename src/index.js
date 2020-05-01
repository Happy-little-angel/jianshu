import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style'
import {GlobaFontlStyle} from './static/iconfont/iconfont'
ReactDOM.render(
    <div>
       <GlobalStyle/>
       <GlobaFontlStyle/>
       <App />
    </div>,
  document.getElementById('root')
);
