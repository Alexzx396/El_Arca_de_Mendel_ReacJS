import {Link} from 'react-router-dom';
import {useCartContext} from '../CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const {itemQuantity} = useCartContext()

            return (
                <Link to="/cart" className="cartwidget-container">
                    <button className="cartwidget">
                    <p className="cartwidget-quantity">{itemQuantity}</p>
                    <img src="../assets/iconos/carroverde2.png" alt="Carrito"/>
                    </button>
                </Link>
            )
        }

export default CartWidget