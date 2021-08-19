import React from 'react'
import getNfts from '../../functions/GetFeaturedNfts'

const Featured = () => {

    getNfts()

    console.log('I am working');
    return (
    <div className='featured-nfts'>
        <div className='sub-heading'>Featured</div>
        <div id='FeaturedGridContainer' className='grid-container'>
        
        </div>
    </div>
    );
}

export default Featured