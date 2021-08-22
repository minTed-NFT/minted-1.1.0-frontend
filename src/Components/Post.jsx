import { useEffect,useState} from "react";
import axios from 'axios';
function Post (){
    const [pro,setpro] =useState([])
    useEffect(async ()=>{
        axios.get('http://localhost:5001/post')
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
                <div>{e.body}</div>
                <div><img src={e.imageURLs}/></div>
            </div>)}
        </>
    )
}
export default Post