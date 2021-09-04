import React from 'react'
import MintedBrand from "../../../src/images/MintedBrand.png";
import SearchBar from './searchbar';
const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-custom">

                {/* Minted Brand Logo Left */}
                <a href="/" style={{float: 'left'}}><img src={MintedBrand} alt='brand' id='brand'/></a>

                {/* Search Box */}
               <SearchBar/>

                {/* Navigation Links */}
                <ul className='nav nav-pills'>
                    <li><a className='nav-link home-tab active enabled' href="#home" data-toggle='tab'>Explore</a></li>
                    <li><a className='nav-link disabled' href="#about" data-toggle='tab'>My Items</a></li>
                    <li><a className='nav-link disabled'href="#following" data-toggle='tab'>Following</a></li>
                    <li><a className='nav-link disabled' href="#create" data-toggle='tab'>Login</a></li>
                    <li><a className='nav-link' id='contact-button' href='mailto: support@minted.ist'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header