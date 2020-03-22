import React,{Component} from 'react';
import NavBar from './component/NavBar'
import './style/app.css'
import Form from './component/From'


export default class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="form-a">
          <Form/>
        </div>
      </div>
    )
  }
}

