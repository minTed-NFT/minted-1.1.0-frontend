import React from "react";



import Creators from "../Components/main/Creators";
import Post from "../Components/main/Post";
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
//      <Post />
export default Main