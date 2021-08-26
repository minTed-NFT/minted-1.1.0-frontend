import React from "react";

import { useEffect,useState} from "react";
import axios from 'axios';


const Post = () => {
    const [pro,setPro] =useState([])
    useEffect(async ()=>{
        axios.get('http://localhost:5001/showcase')
            .then( res =>{
                //console.log(res);
                setPro(res.data);
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])
    return (
        <div className='nft-feed'>
            <h3 className='sub-heading'>Recently Minted</h3>
            <div id='NFTGridContainer' className='grid-container'>
                {pro.map(e => <a href='#will' target='_blank' className='grid-item feed-card unclickable'>
                    <img src={e.imageURLs} alt='Nothing here' />

                    {/* A div with card details to hold the details in the card */}
                    <div className='card-details'>
                        <span className='tag likes'>👍 {e.likes}</span>

                        <span className='tag price'>{e.HighestBidAmount}  CLOUT</span>  {/* Not working */}
                    </div>
                </a>)}

            </div>
        </div>
    );
}

export default Post