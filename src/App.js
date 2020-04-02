import React,{Component} from 'react';
import NavBar from './component/NavBar'
import './style/app.css'
import Form from './component/From'
import Header from './component/Header'


export default class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
        <div className="form-a">
          {/* <Form/> */}
          
        </div>
      </div>
    )
  }
}

