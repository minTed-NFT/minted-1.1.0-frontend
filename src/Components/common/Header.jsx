import React, {useState} from 'react'
import MintedBrand from "../../../src/images/MintedBrand.png";
import SearchBar from './searchbar';
const Header = () => {

    const [user, setUser] = useState('Login')
    const identityURL = 'https://identity.bitclout.com'
    let identityWindow
    let userPayload
    let loggedIn = false

    const launchLogin = () => {
        const h = 1000;
        const w = 800;
        const y = window.outerHeight/2 + window.screenY - h/2;
        const x = window.outerWidth/2 + window.screenX - w/2; 

        window.addEventListener('message', e => {
            console.log('This is event');
            console.log(e);

            if (e.data && e.origin) {
                if (e.origin === 'https://identity.bitclout.com') {
                    if (e.data.method === 'initialize') {
                        console.log('initialize');
                        const data = {id: e.data.id, service: 'identity'};
                        console.log('this is data');
                        console.log(data);
                        identityWindow.postMessage(data, '*');
                    }

                    if (e.data.method == 'login' ) {
                        console.log('login');
                        console.log(e.data);
				        setUser(e.data.payload.publicKeyAdded);
				        console.log(user);
				        userPayload = e.data.payload.users[user]
				        console.log(userPayload)
				        identityWindow.close()
				        loggedIn = true
                    }
            }
            }

        })

        identityWindow = window.open(identityURL + '/log-in', null, `toolbar=no, width=${w}, height=${h}, top=${y}, left=${x}`);
    }


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
                    <li><a className='nav-link' id='contact-button' href='mailto: support@minted.ist'>Contact</a></li>
                    <li><a className='nav-link' href="#create" data-toggle='tab' onClick={launchLogin}>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header