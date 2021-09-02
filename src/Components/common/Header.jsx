import React, {useState} from 'react'
import MintedBrand from "../../../src/images/MintedBrand.png";

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
                <div className='search'>
                    <form action='#'>
                        <div className='search-bar'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <input type='text' placeholder='Search Usernames Here' name='search' />
                        </div>
                    </form>
                </div>

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