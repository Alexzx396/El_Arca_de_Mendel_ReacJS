import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock}) =>{
    
    const [count, setState] = useState(initial);
    
    const diminish = () => {
        setState(count-1);     
    }   
    const increase = () => {
        setState(count+1);     
    }

    const onAdd = () => {
        alert(`Agregaste ${count} unidad(es) a tu carrito`);
    }
    
    return (
        <div className="count-container">
            <div className="count-selectors">
                <button className="count-buttom"onClick={diminish} disabled={(count<=initial) 
                ? true : false}>-</button>
                <div className="count-display">{count}</div>
                <button className="count-buttom" onClick={increase} disabled={ (count>=stock) 
                ? true : false }>+</button>
            </div>
            <button className="count-add" onClick={onAdd}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount