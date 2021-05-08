import React from 'react'
import {Link} from 'gatsby'
// import {Gi3DGlasses} from 'react-icons/gi'
import {FaCartArrowDown} from 'react-icons/fa'
import {GiBookStorm} from 'react-icons/gi'


export default function Navbar() {

    // var state = {
    //     navbarState:false,
    //     navbarClass:'collapse navbar-collapse show'
    // }

    // var myToggler = () => {
    //     this.state.navbarState ? this.setState({
    //         navbarState:false,
    //         navbarClass: 'collapse navbar-collapse'

    //     }) : this.setState({
    //         navbarState:true,
    //         navbarClass: 'collapse navbar-collapse show'
    //     })
    // }
   


    return (
        <nav className='navbar navbar-expand-sm bg-theme text-white'>
        <GiBookStorm className='nav-logo ml-2'/>
    
                <button class="navbar-toggler" type="button" >
                <span class="text-white">Menu</span>
              </button>

                <div className='collapse navbar-collapse show'>
                    <ul className='navbar-nav ml-auto mr-5'>
                        <li className='nav-item'><Link to='/' className='nav-link text-white'>Home</Link></li>
                        <li className='nav-item'><Link to='/products' className='nav-link text-white'>Products</Link></li>
                        <li className='nav-item'><Link to='/about' className='nav-link text-white'>About</Link></li>
                        <li className='nav-item'><Link to='/contact' className='nav-link text-white'>Contact</Link></li>
                        <li className='nav-item'><Link to='' className='nav-link text-white snipcart-customer-signin'>Summary</Link></li>
                        <li className='nav-item'><Link to='/' className='nav-link text-white'><FaCartArrowDown className='cart-icon snipcart-checkout' /></Link></li>
                    </ul>
                </div>

                
        </nav>
    )
}

