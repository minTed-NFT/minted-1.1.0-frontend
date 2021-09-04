import React from 'react'
import axios from 'axios'



const getNFTs = async(pub) => {
    let response = await axios.get(`http://localhost:5001/unfts/${pub}`)
    .then(res => {
        console.log('testig NFTs')
        console.log(res);
        return res.data
    })
    console.log(response);
    return response
}


export default getNFTs