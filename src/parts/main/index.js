import React from "react";

import Banner from './Banner'
import Featured from './Featured'
import Profiles from './Profiles'
import Showcase from './Showcase'



const Main = () => {
    
    return (
        <main className='container' id='home'>
            <Banner />
            <Featured />
            <Profiles />
            <Showcase />
        </main>
    )
}

export default Main