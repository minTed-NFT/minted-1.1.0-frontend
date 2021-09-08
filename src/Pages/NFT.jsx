import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"


const Nft = () => {
    const {postHashHex} = useParams()
    const [data, setData] = useState({NFTDataBids : []})
    const [isLoading, setIsLoading] = useState(true)

    const getData = async(postHashHex) => {
        let response = await axios.get(`http://localhost:5001/nft/${postHashHex}`)
            .then((response)=> {
                console.log(response);
                setData(response.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData(postHashHex)
    }, [])


    return (
    <main className="container">
        <div className="nft-grid-container">
            <img src={data.imageURLs } alt="NFT" className="nft-grid-item NFT-image" />

            <div className="grid-item NFT-details">

                {/* Creator Details */}
                <h4 className="creator">Creator</h4>
                <a href={data.minted_profileLink} className="creator-card">
                    <img 
                    src={`https://bitclout.com/api/v0/get-single-profile-picture/${data.user_pubKey}?fallback=https://bitclout.com/assets/img/default_profile_pic.png`} alt="" className="creator-dp" />
                    <p className="creator-name">{data.username}</p>
                </a>
                <div className="present-price">From {() => {
                    if (data.NFTDataBids) {
                        return <b>{data.NFTDataBids[0].BidAmount$Clout}</b>
                    }
                    return <b>Fetching</b>
                    
                    }} CLOUT</div>
                <div className="likes-diamonds-reclouts">
                    👍 {data.likes}
                    💎 {data.Diamonds}
                    🔁 {data.reclouts}
                </div>

                <i class="fas fa-retweet"></i>

                <div id="details-offers">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="details-tab" data-toggle="pill" href="#details" role="tab"
                                    aria-controls="details" aria-selected="true">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="bidders-tab" data-toggle="pill" href="#bidders" role="tab" aria-controls="bidders"
                                    aria-selected="false">Bidders</a>
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="pills-tabContent">
                        
                            <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                                <div class="details">{data.body}</div>
                        
                            </div>
                        
                            <div className="tab-pane fade" id="bidders" role="tabpanel" aria-labelledby="bidders-tab">
        
                                <table>

                                    
                                    <tr>
                                        <th>Bidder</th>
                                        <th>Bid Price</th>
                                    </tr>
                                    {data.NFTDataBids.map(singleBid => {
                                    
                                        return (
                                        <tr>
                                            <td> {singleBid.BiderName}</td>
                                            <td>{singleBid.BidAmount$Clout}</td>
                                        </tr>
                                        );
                                    })}
                                    
                        
                                    
                                </table>
                        
                            </div>
                        
                        </div>

                    </div>
                      
                    
                   <a id="bitclout-redirection" href={data.BitcloutLink} target='_blank'>Buy</a>
            </div>
        </div>
    </main>
    );
}

export default Nft