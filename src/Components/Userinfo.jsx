import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Userinfo(props){
    let { id } = useParams()
    const [pro,setpro] =useState()
    console.log(props);
    useEffect(async ()=>{
        axios.get('http://localhost:5001/u/user/${props.uid}')
            .then( res =>{
                console.log(res);
                //setpro(res.data);
            })
            .catch( err =>{
                console.log(err);
            })
    })
    return (
        <>
            <div>

            </div>
        </>
    )
}
export default Userinfo