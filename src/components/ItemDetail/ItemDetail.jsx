import {useState} from 'react'
import {useCartContext} from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 


const ItemDetail = ({detail}) => {

    const [quantity, setQuantity] = useState(1);
    const {addToCartList} = useCartContext();
    

    const addToCart =(quantityAdded)=> {
        setQuantity(quantityAdded);
        addToCartList({detail, quantity: quantityAdded}); 
    }
   
    
    return (
        <div>
            <div className="item-detail-card" >
             
                <img className="item-detail-img" src={detail.pictureUrl} alt={detail.title}/>
                    <div>
                        
                        <h1 className="item-detail-title">{detail.title}</h1>
                        <hr />
                        <p className="item-detail-price">$ {detail.price}</p>
                        <p className="item-detail-description">{detail.description}</p>
                        <h6 className="item-detail-brand">{detail.brand}</h6>
                        
                    </div>
                <div>
                    <div>
                        <ItemCount initial={quantity} stock={detail.stock} addToCart={addToCart}/>
                    </div> 
                        <button className="item-detail-stock" disabled>
                        {detail.stock} Unidades Disponibles </button>
                        <h6 className="item-title"> Medios de Pago </h6>   
                        <img
                        src={"/assets/mediosPago/medios-de-pago-chile.png"}
                        alt="Medios de Pago" className="item-detail-img-mediospago" />
                        
                </div>        
            </div>
        </div>
    )
}

export default ItemDetail