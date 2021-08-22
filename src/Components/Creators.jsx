import { useEffect,useState} from "react";
import axios from 'axios';
function Creators(){
    const [pro,setpro] =useState([])
    useEffect(async ()=>{
        axios.get('http://localhost:5001/profilepic')
            .then( res =>{
                //console.log(res);
                setpro(res.data);
            })
            .catch( err =>{
                console.log(err);
            })
    })
    return (
        <>
            {pro.map(e => <div>
                <div>{e.username}</div>
                <div><img src={e.UserProfilePic}/></div>
            </div>)}
        </>
    )
}
export default Creators