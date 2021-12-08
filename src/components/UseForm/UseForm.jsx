import {useCartContext} from '../CartContext/CartContext';
import './UseForm.css'; 

const UserForm = ({createOrder}) =>{

    const {handleForm, userData} = useCartContext();

    return (
        <form form id="date-orden" onChange={handleForm} onSubmit={createOrder} ><hr />
            <legend  className="form-legend">Ingresá tus datos</legend>
                <div className="col-md-3">
                    <input 
                        id="date-orden"
                        type="text" 
                        placeholder="Nombre" 
                        className="form-control" 
                        name="name" 
                        defaultValue={userData.name}
                        required />
                </div>
                <div className="col-md-3">
                    <input 
                        id="date-orden"
                        type="text" 
                        placeholder="Apellido" 
                        className="form-control" 
                        name="surname" 
                        defaultValue={userData.surname}
                        required />
                </div>
                <div className="col-md-3">
                    <input 
                        id="date-orden"
                        type="text" 
                        placeholder="Fono" 
                        className="form-control" 
                        name="phone"
                        defaultValue={userData.phone}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        id="date-orden"
                        type="email" 
                        placeholder="Correo" 
                        className="form-control" 
                        name="email"
                        defaultValue={userData.email}
                        required />
                </div>
                <div className="col-md-3">
                    <input 
                        id="date-orden"
                        type="text" 
                        placeholder="Direccion" 
                        className="form-control" 
                        name="adress"
                        defaultValue={userData.adress}
                        required />
                </div>
                    <button type="submit" className="btn btn-outline-danger">Comprar</button><hr />
            
        </form>
    )
}

export default UserForm