import React, {useEffect, useState} from "react";
import axios from 'axios';


const Creators = () => {
    const [pro,setPro] =useState([])

    const getData = async () => {
        axios.get('http://localhost:5001/top-creators')
            .then( res =>{
                console.log(res);

                setPro(res.data);
                console.log(pro);
            })
            .catch( err =>{
                console.log(err);
            })
    }


   
    useEffect(() => {
        getData()
    }, [])
   
    return (
        <div className='top-creators'>
            <h3 className='sub-heading'>Top Creators</h3>

            {/* Profile Cards */}
            
            <div id='userGridContainer' className='grid-container container'>

                {/* Card Component */}
                {pro.map(e => <a href={`u/${e.username}`} className='grid-item user-card'>
                        <img src={e.UserProfilePic} className='creator-dp' alt={`${e.username}`} />
                        <b className='user-name'>{e.username}</b>
                    </a>)}
            </div>
        </div>
    )
}
export default Creators