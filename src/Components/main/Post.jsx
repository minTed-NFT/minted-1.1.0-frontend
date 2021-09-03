import React from "react";

import { useEffect,useState} from "react";
import axios from 'axios';


const Post = () => {
    const [pro,setPro] =useState([])

    const sortArray = type => {
        const types = {
            HighestBidAmount: 'HighestBidAmount',
            likes: 'likes'
        }

        const sortProperty = types[type];
        const sorted = [...pro].sort((a,b) => b[sortProperty] - a[sortProperty])
        setPro(sorted)
    }

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

            <select onChange={(e) => sortArray(e.target.value)}>
                <option value="HighestBidAmount">Highest Bid</option>
                <option value="likes">Most Liked</option>
            </select>
            <div id='NFTGridContainer' className='grid-container'>
                {pro.map(e => <a href={e.NFTPageLink} target='_blank' className='grid-item feed-card unclickable'>
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