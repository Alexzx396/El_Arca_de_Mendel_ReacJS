import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import GetFetchDetail from '../../services/GetFetchDetail';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const {productId} = useParams()

    useEffect(() => {
        GetFetchDetail
        .then(response => {
            console.log('Llamando a las API') 
            setDetail(response.find(prod => prod.id === productId))
        })
        .catch (error => alert("Error:", error))
        .finally(()=> console.log(false))
        
        
    },[productId])   

    return (
            <div className="detail-container">
                <ItemDetail detail={detail}/>
            </div>
    )
}

export default ItemDetailContainer