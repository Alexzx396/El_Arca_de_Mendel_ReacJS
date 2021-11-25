import {Link} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar" expand="lg" bg="dark" variant="dark" fixed="top">
            <Link  className="logo" to="/"> <img className="logo-img" src="../assets/logo/logo-Arca.png" alt="Arca-de-mendel" width= "160px" /></Link>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categorie/Nosotros">Nosotros</Link></li>
                <li><Link to="/categorie/Cactus">Cactus</Link></li>
                <li><Link to="/categorie/Suculentas">Suculentas</Link></li>
                <li><Link to="/categorie/Exoticas">Exoticas</Link></li>
                <li><Link to="/categorie/Contacto">Contacto</Link></li>
            </ul>
            <div>
            <CartWidget className="navbar-cart"/>
            </div>
  </nav>
    )
}

export default NavBar