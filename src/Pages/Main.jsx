import React, {Component} from "react";

import { useEffect,useState} from "react";
import axios from 'axios';
import Creators from "../Components/Creators";
import Post from "../Components/Post";
const Main = ()=> {


    console.log('I am working');
    return (
    <section>
        <Creators />
        <Post />
    </section>
    )

}

export default Main