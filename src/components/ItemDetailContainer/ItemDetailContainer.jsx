import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore} from '../../services/GetFirestore';


const ItemDetailContainer = () => {

    const [detail, setItemDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const {productId} = useParams()


    useEffect(() => {

        const dataBase = getFirestore()

        dataBase.collection("Items").doc(productId).get()
        .then(item => setItemDetail({id:item.id, ...item.data()}))
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