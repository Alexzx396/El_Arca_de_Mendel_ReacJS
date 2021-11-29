import { useState} from 'react';
import './ItemCount.css';
import { Link} from 'react-router-dom'


const ItemCount = ({initial, stock, addToCart}) =>{
    const [quantity, setQuantity] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)
    
    const handlerAdd=()=> {
        setQuantity(quantity+1);      
    }

    const handlerRm=()=> {
        setQuantity(quantity-1);     
    }   
    
    
    const addToCartHandler = ()=> { 
        alert(`Agregaste ${quantity} producto(s) a tu carrito`)
        addToCart(quantity)
        setCambiarBoton(true)       
    }


    
    return (
        <div className="quantityt-container">
            <div className="quantity-selectors">
                <button className="quantity-buttom" onClick={handlerRm} disabled={(quantity<=initial) 
                ? true : false}>-</button>
                <div className="quantity-display">{quantity}</div>
                <button className="quantity-buttom" onClick={handlerAdd} disabled={(quantity>=stock) 
                ? true : false }>+</button>
            

                <div className="quantity-container">
                {cambiarBoton 
                
                ?   <div className="quantity-selectors"> 
                       <Link to="/cart">
                            <button className="quantity-add" >Terminar</button>           
                        </Link>
                        <Link to="/" >
                            <button className="quantity-add" >Seguir</button>      
                        </Link>
                    </div> 
                :   <button onClick={addToCartHandler} className="quantity-add" > Agregar </button>  
                }
                </div>

            </div>
        </div>
    )
}

export default ItemCount