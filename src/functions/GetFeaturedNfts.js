import { useState } from 'react'

const axios = require('axios')


const GetFeaturedNfts = () => {

	async function sample()	{

		  
	
			 let response=await axios.post('https://bitclout.com/api/v0/get-posts-for-public-key',{
		  
			  PublicKeyBase58Check:"",
			  Username:'manu',
			  ReaderPublicKeyBase58Check:"BC1YLin2QZLzk3GwnjwxYt4P11oLBNXsJtBdBSq9LEvdmVS7MN1qEag",
			  NumToFetch: 10,
			   
			   }, {
			  headers: {
				  'Content-Type': 'application/json',

			  }}).then(response=>{
				 //console.log(response);
				 let a = response.data
				 console.log("This is a sample line")
				 console.log(a)
				 return response.data
	
			}).catch(err=>{
				console.log('There is an error');
			   })
			   }   

			sample()
			
	
	return <h2>This is a check sentence</h2>
	
}
		
	


export default GetFeaturedNfts