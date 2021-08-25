import React from "react";



import Creators from "../Components/Creators";
import Post from "../Components/Post";
import Banner from '../Components/Banner'
const Main = ()=> {


    console.log('I am working');
    return (
    <main>
        <div className='container' id='home'>
            <Banner />
            <Creators />
            <Post />
        </div>
    </main>
    )

}

export default Main