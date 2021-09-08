import React from "react";

import { useEffect,useState} from "react";
import axios from 'axios';


const NFT = () => {
    const [pro,setPro] =useState([])

    const sortArray = type => {
        const types = {
            HighestBidAmount: 'HighestBidAmount',
            likes: 'likes',
            DiamondCount: 'DiamondCount',
            time: 'timeStamp'

        }

        const sortProperty = types[type]

       
        const sorted = [...pro].sort((a,b) => {
            // console.log(b[sortProperty] - a[sortProperty])
            return (b[sortProperty] - a[sortProperty])
        })
        setPro(sorted)
      
        
        
    }

    useEffect(async ()=>{
        axios.get('http://localhost:5001/showcase')
            .then( res =>{
                console.log(res);
                setPro(res.data);
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])

    return (
        <div className='nft-feed'>
            <h3 className='sub-heading'>Show Case</h3>

            <select onChange={(e) => sortArray(e.target.value)}>
                <option value="HighestBidAmount" >Highest Bid</option>
                <option value="likes" defaultValue>Most Liked</option>
                <option value="DiamondCount">Most Diamonded</option>
                <option value="biddersCount">No. of Bidders</option>
                {/* <option value="Lowest Priced">Lowest Priced</option> */}
                <option value="time">Recent</option>
            </select>
            <div id='NFTGridContainer' className='grid-container'>
                {pro.map(e => <a href={e.NFTPageLink} target='_blank' className='grid-item feed-card unclickable'>
                    <img src={e.imageURLs} alt='Nothing here' />

                    {/* A div with card details to hold the details in the card */}
                    <div className='card-details'>
                        <span className='tag likes'>👍 {e.likes}</span>

                        <span className='tag price'>{e.HighestBidAmount.toFixed(3)}  CLOUT</span>  {/* Not working */}
                    </div>
                </a>)}

            </div>
        </div>
    );
}

export default NFT