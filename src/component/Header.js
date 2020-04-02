import React,{Component} from 'react'

export default class Header extends Component{
    render() {
        return (
            <div className='header-container'>
                <div className='topLine'></div>
                <div className='container-title'>
                    <h1 className='title'>Hey,I'm Yanis</h1>
                    <h2 className='presentation'>Full Stack developer from Vancouver,CA.I custom website to help buisness do better online.</h2>
                </div>
                <div className='btn-container-header'>
                    <button className='myProject-btn'>My Pojects</button>
                </div>
            </div>
        )
    }
}