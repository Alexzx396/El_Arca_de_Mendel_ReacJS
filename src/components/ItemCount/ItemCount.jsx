import {useState} from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom'

const ItemCount = ({initial, stock}) =>{
    const [count, setState] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)
    
    const diminish = () => {
        setState(count-1);     
    }   
    const increase = () => {
        setState(count+1)      
    }

    const onAdd = () => {
        alert(`Agregaste ${count} unidad(es) a tu carrito`);
        setState(initial);
        setCambiarBoton(true)
    }
    
    return (
        <div className="count-container">
            <div className="count-selectors">
                <button className="count-buttom"onClick={diminish} disabled={(count<= initial) 
                ? true : false}>-</button>
                <div className="count-display">{count}</div>
                <button className="count-buttom" onClick={increase} disabled={ (count>= stock) 
                ? true : false }>+</button>

            {cambiarBoton ?
                <Link to="/categoria/CartWidget">
                    <button className="count-add" >Terminar Compra </button> 
                </Link> :  <button className="count-add" onClick={onAdd}> Agregar </button> 
            }

            </div>
        </div>
    )
}

export default ItemCount