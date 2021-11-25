import {Link} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Footer from "../Footer/Footer";

const NavBar = () => {
    return (
        <nav className="navbar" expand="lg" bg="dark" variant="dark" fixed="top">
            <Link  className="logo" to="/"> <img className="logo-img" src="../assets/logo/logo-Arca.png" alt="Arca-de-mendel" width= "170px" /></Link>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categoria/Nosotros">Nosotros</Link></li>
                <li><Link to="/categoria/Cactus">Cactus</Link></li>
                <li><Link to="/categoria/Suculentas">Suculentas</Link></li>
                <li><Link to="/categoria/Exoticas">Exoticas</Link></li>
                <li><Link to="/categoria/Contacto">Contacto</Link></li>
            </ul>
            <div>
            <CartWidget className="navbar-cart"/>
            </div>
            <div>
            
            </div>
  </nav>
    )
}

export default NavBar