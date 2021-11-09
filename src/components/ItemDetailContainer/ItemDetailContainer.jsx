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
            setDetail(response.find(prod => prod.id === productId))
        })
        .catch (error => alert("Error:", error))
        .finally(()=> console.log(false))
        
        
    },[productId])  
    
    console.log(detail, 'Soy el producto en el container')

    return (
            <div className="detail-container">
                <ItemDetail detail={detail}/>
            </div>
    )
}

export default ItemDetailContainer