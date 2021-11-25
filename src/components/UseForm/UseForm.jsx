import {useCartContext} from '../CartContext/CartContext';
import './UseForm.css'; 

const UserForm = ({createOrder}) =>{

    const {handleForm, userData} = useCartContext();

    return (
        <form id="date-orden" onChange={handleForm} onSubmit={createOrder}><hr />
            <legend  className="form-legend">Ingresá tus datos</legend>
            <div id="date-orden">
                <br />
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" placeholder="" defaultValue={userData.name}/>
            </div>
            <div id="date-orden">
                <label htmlFor="surname" className="form-label">Apellido</label>
                <input type="text" name="surname" placeholder="" defaultValue={userData.surname}/>
            </div>
            <div id="date-orden">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" name="phone" placeholder="" defaultValue={userData.phone}/> 
            </div>
            <div id="date-orden">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" placeholder="" defaultValue={userData.email}/>
                <p>*fabor revisar bien sus datos, Gracias!</p>
            </div>
            <button className="buy-buttom">¡Comprar!</button><hr />
            
        </form>
    )
}

export default UserForm