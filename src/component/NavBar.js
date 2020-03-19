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
                <div className={isOpen ?'clickNavBar-container':'navBar-container'}>
                    <div className={isOpen ?'clickName-container':'name-container'}>
                        <h1 className={isOpen ?'clickName':'Name'}>Yanis bekbek</h1>
                    </div>
                        <div className="hamburger" onClick={this.handleMenuButtonClick}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                    </div>
                    <div className={isOpen ?'showContainer' :'hideContainer'}>
                        <ul className={isOpen ? 'showItem' : 'hide'}>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>

                    </div>

                </div>
        )
    }
}