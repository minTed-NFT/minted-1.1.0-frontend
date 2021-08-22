import { useEffect,useState} from "react";
import axios from 'axios';
import Creators from "../Components/Creators";
import Post from "../Components/Post";
function Main(){

    return(<>
        <h1>Creators</h1>
        <Creators />
        <h1>Post</h1>
        <Post />
    </>)

}

export default Main