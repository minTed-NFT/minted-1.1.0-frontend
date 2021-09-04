import React, {useEffect, useState} from 'react'
import getNFTs from "./NFTGallery";
import axios from "axios";


const Userinfo = (props) => {
    const {username} = props
    const [info, setInfo] = useState({})
    const [NFT, setNFT] = useState([])
    let sorting='nothing'
    let publicKey=''


        



    const getData = async(username) => {
        let response = await axios.get(`http://localhost:5001/u/${username}`)
        .then(res => {
            console.log('testing');
            console.log(res.data);
            setInfo(res.data)
            publicKey = res.data.public_key
            console.log(publicKey);
        }).then(async(res) => {
            let nfts = await getNFTs(publicKey);
            console.log(nfts);
            setNFT(nfts)
            
        }
            
        )
        .catch(err => console.log(err))
    }
    

    useEffect(() => {
        getData(username)
    }, [])


    return (
        <div className='user-details'>
            {/* User-Card Component */}
            <div className='card-user'>
                <img src={info.profile_image} className='creator-dp' alt='image' />
                {/* A div with card details class to hold the details in the card */}
                <div id='username'className='card-details card-details-user'>{info.username}</div>
                
            </div>

            <div className='description'>
                <h3 className='bio-heading'>Bio</h3>
                <div className='bio-description'>{info.description}</div>
                <a className='bitclout-redirection' href={info.bitclout_link} target='_blank'>View Profile</a> 
                
            </div>

            <div>
                

                {NFT.map(single => {
                    return <img class= 'width-test' src={single.ImageURL} alt={single.LikeCount} />
                })}
            </div>
        </div>
    )
}
export default Userinfo
