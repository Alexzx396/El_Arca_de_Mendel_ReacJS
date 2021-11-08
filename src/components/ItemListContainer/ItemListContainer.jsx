import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import GetFetchList from '../../services/GetFetchList';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        if (categoryId) {
            GetFetchList
            .then(response => {       
                setProduct(response.filter(prod => prod.categorie === categoryId))
            })
            .catch (error => alert("Error:", error)) 
        }
        
        else {
            GetFetchList
            .then(response => {        
                setProduct(response)
            })
            .catch (error => alert("Error:", error))
        }
    },[categoryId])

    return (
            <div className="list-container">
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer