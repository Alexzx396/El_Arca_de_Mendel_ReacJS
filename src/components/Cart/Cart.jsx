import {useState} from 'react';
import {useCartContext} from '../../components/CartContext/CartContext';
import {Link} from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {

    const [orderId] = useState("");
    const {cartList, removeItem, removeCart, cartTotal, userData} = useCartContext();

    
    return (

        <div>
            {cartList.length
            ? <button className="remove-cart" onClick={() => removeCart()}>Vaciar carrito</button>
            : orderId===""
                ? <div>
                <p className="empty-cart">El carrito está vacío</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
                </div>
                : <div>
                <p className="empty-cart">¡Gracias por la compra!</p>
                <p className="order-id">Tu código de operación es: {orderId}</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
                </div>
            }
            
            <div className=
                {cartList.length
                ? "filled-cart"
                : "not-filled-cart"
                }
                > 
                {cartList.map(itemAdded => 
                    <div className="item-added-card" key={itemAdded.detail.id} >
                        <img className="item-added-img" src={itemAdded.detail.pictureUrl} alt={itemAdded.detail.title}/>
                        <div className="item-added-info">
                            <h5 className="item-added-title">{itemAdded.detail.title}</h5>
                            <h6 className="item-added-brand">{itemAdded.detail.brand}</h6>
                            <p className="item-added-description">{itemAdded.detail.description}</p>
                            <p className="item-added-price">$ {itemAdded.detail.price}</p>
                            <p className="item-added-quantity">Cantidad: {itemAdded.quantity}</p>
                        </div>
                        <div>
                            <button className="remove-item" onClick={() => removeItem(itemAdded.detail.id)}>Eliminar producto</button>
                        </div>
                    </div>
                )}
                <div>
                    <p className="cart-total">Total de la compra: $ {cartTotal}</p>
                </div>
                {/* <UserForm createOrder={createOrder}/> */}
            </div>
        </div>
    )
}

export default Cart

       