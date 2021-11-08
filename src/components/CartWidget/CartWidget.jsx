import './CartWidget.css';
import { Link } from 'react-router-dom'


const CartWidget = (count) => {
    return (
            <div>
                <Link to="/categoria/CartWidget" className="count-add">
                </Link>
            </div>
    )
}

export default CartWidget