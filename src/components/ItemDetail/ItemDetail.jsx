import {useState} from 'react'
import {useCartContext} from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 


const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(0)
    const {cartList, mastrarListado, agregarAlCarrito} = useCartContext()
    console.log(cartList, 'yo soy mostrar el listado');
    console.log(mastrarListado, 'yo soy Agregar el listado');

    const onAdd =(cant)=>{
        setCount(cant)
        agregarAlCarrito({detail, cantidad: cant})
        console.log(cartList, 'yo soy CarList en funcion OnAdd')
    }
   
    
    return (
        <div>
            <div className="product-detail-card" >
             
                    <img className="product-detail-img" src={detail.pictureUrl} alt={detail.title}/>
                    <div>
                        
                        <h1 className="product-detail-title">{detail.title}</h1>
                        <hr />
                        <p className="product-detail-price">$ {detail.price}</p>
                        <p className="product-detail-description">{detail.description}</p>
                        <h6 className="product-detail-brand">{detail.brand}</h6>
                        
                    </div>
                    <div>
                        <div>
                          <ItemCount initial={1} stock={detail.stock} onAdd={onAdd}/>
                        </div> 
                        <button className="product-detail-stock" disabled>
                        {detail.stock} Unidades Disponibles </button>
                        <h6 className="detail-title"> Medios de Pago </h6>
                            
                        <img
                        src={"/assets/mediosPago/medios-de-pago-chile.png"}
                        alt="Medios de Pago" className="product-detail-img-mediospago" />
                        
                    </div>
                        
            </div>
        </div>
    )
}

export default ItemDetail