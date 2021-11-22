import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import GetFetchDetail from '../../services/GetFetchDetail';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [detail, setItemDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const {productId} = useParams()


    useEffect(() => {
        GetFetchDetail
        .then(response => {setItemDetail(response.find(item => item.id === productId))})
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))
        
        
    },[productId])  
    
   

    return (
            <div className="detail-container">
                { loading
                ? <h2 className="loading">El detalle del producto se está cargando</h2>
                : <ItemDetail detail={detail}/>
            }
            </div>
            
    )
}

export default ItemDetailContainer