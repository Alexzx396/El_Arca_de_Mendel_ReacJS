import { useState} from 'react';
import './ItemCount.css';
import { Link} from 'react-router-dom'


const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setState] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false)
    
    const handlerAdd=()=> {
        setState(count+1)      
    }

    const handlerRm=()=> {
        setState(count-1)     
    }   
    
    const handlerOnAdd = ()=> { 
        alert(`Agregaste ${count} producto(s) a tu carrito`)
        onAdd(count)
        setState(initial)
        setCambiarBoton(true)
        
        // window.confirm('Agregado!')
}


    
    return (
        <div className="count-container">
            <div className="count-selectors">
                <button className="count-buttom" onClick={handlerRm} disabled={(count<=initial) 
                ? true : false}>-</button>
                <div className="count-display">{count}</div>
                <button className="count-buttom" onClick={handlerAdd} disabled={ (count>=stock) 
                ? true : false }>+</button>
            

                <div className="count-container">
                {cambiarBoton ?

                    <div className="count-selectors">
                        <Link to="/categoria/CartWidget">
                            <button className="count-add" >Terminar</button>           
                        </Link>
                        <Link to="/" >
                            <button className="count-add" >Seguir</button>      
                        </Link>
                    </div> : <button onClick={handlerOnAdd} className="count-add" > Agregar </button>  
                }
                </div>

            </div>
        </div>
    )
}

export default ItemCount