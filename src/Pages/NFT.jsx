import { useParams } from "react-router-dom"


const Nft = () => {
    const {id} = useParams()

    return <div> I am working {id}</div>
}

export default Nft