import React, {useState, useEffect} from 'react'
import axios from "axios";



const Featured = () => {
    const [data, setData] = useState([])
    
    const getData = async() => {
        let response = await axios.get('http://localhost:5001/featured')
        .then(res => {
            
            console.log(res.data);
            setData(res.data)
            
        })    
        .catch(err => console.log(err));
    }

    useEffect(() => {

        getData()

    }, [])

    return (
        <div className='featured-nfts'>
            <h3 className='sub-heading'>Featured</h3>
            <div id='FeaturedGridContainer' className='grid-container'>
                {data.map( e => {
                    const {ImageURL, LikeCount, HighestBidNanos} = e
                    return <a href={e.NFTPageLink} target='_blank' className='grid-item featured-card'>
                        
                        <img src={ImageURL} alt='NFT Image' />

                        {/* A div with Card Details class to hold the details in the card */}
                        <div className='card-details'>
                            <div className='tag likes'>👍 {LikeCount}</div>
                            <div className='tag price'>{HighestBidNanos} CLOUT</div>
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Featured