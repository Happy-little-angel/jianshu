import React, { PureComponent } from 'react'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './pages/home'
import Detial from './pages/detail'
import Login from './pages/Login'
import Write from './pages/write'
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/detial' exact component={Detial}/> 
            <Route path='/login' component={Login}/> 
            <Route path='/write' component={Write}/>
            
          </Router>
        </div>
      </Provider>
    )
  }
}
