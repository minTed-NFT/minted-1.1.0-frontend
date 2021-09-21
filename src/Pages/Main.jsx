import React from "react";



import Creators from "../Components/main/Creators";
import NFT from "../Components/main/NFT";
import Banner from '../Components/main/Banner'
import Featured from '../Components/main/Featured'
const Main = ()=> {


    console.log('I am working');
    return (
    <main id='home-parent'>
        <div className='container' id='home'>
            <Banner />
            <Featured />
            
            <Creators />

    
            

        </div>
    </main>
    )

}
//      <NFT />
export default Main