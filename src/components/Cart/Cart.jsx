import {useState} from 'react';
import {useCartContext} from '../../components/CartContext/CartContext';
import {Link} from 'react-router-dom';
import UseForm from '../UseForm/UseForm';
import './Cart.css'; 
import {getFirestore} from '../../services/GetFirestore';
import firebase from 'firebase';
import 'firebase/firestore';


const Cart = () => {

    const [orderId, setOrderId] = useState("");
    const {cartList, removeItem, removeCart, cartTotal, userData} = useCartContext();

    const createOrder = (e) => {

    e.preventDefault()

    let order = {}
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = userData;
    order.total = cartTotal;
    order.items = cartList.map(itemAdded => {
        const id = itemAdded.detail.id;
        const title = itemAdded.detail.title;
        const quantity = itemAdded.quantity;
        const subtotal = itemAdded.detail.price * itemAdded.quantity;
        return {id, title, quantity, subtotal}
    })


    const dataBase = getFirestore()

    dataBase.collection("orders").add(order)
    .then(response => setOrderId(response.id))
    .catch (error => alert("Error:", error))
    .finally(() => removeCart())

    const updateStock = dataBase.collection("items").where
    (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.detail.id))

    const batch = dataBase.batch();

    updateStock.get()
    .then(response => {
        response.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.detail.id === docSnapshot.id).quantity
            })
    })
    
    batch.commit()
    .catch (error => alert("Error:", error))
    })
}

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
                <p className="empty-cart">¡Gracias por la compra!</p><hr />
                <p>Datos de depocito</p>
                <p>Nombre: Alex Arce suarez</p>
                <p>Rut: 17.678.812-7</p>
                <p>Banco: Banco Estado</p>
                <p>Correo: a.l.e.x_91@hotmail.com</p>
                <p>*Fabor enviarnos tu comprobante a nuestro correo</p><hr />
                <p className="order-id">Tu código de operación es: {orderId}</p>
                <Link type="button" class="btn btn-success" to="/"> Ir al inicio</Link>
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
                            <button type="button" class="btn btn-outline-success" onClick={() => removeItem(itemAdded.detail.id)}>Eliminar </button>
                        </div>
                    </div>
                )}
                <div>
                    <p className="cart-total">Total de la compra: $ {cartTotal}</p>
                </div>
                <UseForm createOrder={createOrder}/>
            </div>
        </div>
    )
}

export default Cart

       