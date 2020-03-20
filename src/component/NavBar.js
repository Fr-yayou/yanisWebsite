import React, { Component } from 'react'

export default class NavBar extends Component {

    state = {
        isOpen:false
    }
    handleMenuButtonClick =()=>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const { isOpen } = this.state;
        return (
            <div className="nav">
                <div className="nav-container">
                    <div className="name-container">
                        <h1 className={isOpen ?'nameOpen' :'nameClose'}>Yanis B</h1>
                    </div>
                    <div className="hamburger" onClick={this.handleMenuButtonClick}>
                        <div className={isOpen ? 'cross':'btn'}></div>
                    </div>
                    <div className={isOpen ? 'play' :'close'}>
                        <li><a href="#" className={isOpen ? 'playTwo' :'closeTwo'}>Home</a></li>
                        <li><a href="#" className={isOpen ? 'playTwo' :'closeTwo'}>About</a></li>
                        <li><a href="#"className={isOpen ? 'playTwo' :'closeTwo'}>Contact</a></li>
                    </div>
                    <div className="menu-desktop">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>

                </div>
            </div>

        )
    }
}

