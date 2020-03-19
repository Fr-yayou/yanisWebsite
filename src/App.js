import React,{Component} from 'react';
import NavBar from './component/NavBar'
import './style/app.css'


export default class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    )
  }
}

