import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'


const NavBar = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const navAnimation = useSpring({ transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(0,-100%,0)`, color: '#919191' })
    
    const name = useSpring({
        color: isNavOpen ? '#191a1d' :'white'
    })
    const hamburger = useSpring({
        background: isNavOpen ?'#191a1d':'white'
    })


    
    return (
            <div className='nav'>
                <div className="nav-container" >
                    <div className="name-container">
                        <animated.h1 className='name' style={name}>Yanis B</animated.h1>
                    </div>
                    <div className="hamburger" onClick={()=> setNavOpen(!isNavOpen)}>
                        <animated.div className='lineOne' style={hamburger}></animated.div>
                        <animated.div className='lineTwo' style={hamburger}></animated.div>
                        <animated.div className='lineThree' style={hamburger}></animated.div>
                    </div>
                    <div className='bottom'></div>
                    <animated.div className='mobileNav' style={navAnimation}>
                        <li id='border-bottom'><a href="#">Home</a></li>
                        <li id='border-bottom'><a href="#">About</a></li>
                        <li id='up-space'><a href="#">Contact</a></li>
                    </animated.div>
                    <div className="menu-desktop">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>

                </div>
            </div>

        )
}
export default NavBar


