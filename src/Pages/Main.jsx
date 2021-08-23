import React, {Component} from "react";
import { useEffect,useState} from "react";
import axios from 'axios';

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