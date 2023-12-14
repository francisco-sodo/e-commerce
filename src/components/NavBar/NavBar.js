import CartWidget from "../CartWidget/CartWidget";
import brandLogo from "./assets/brand-logo.png";

import { Link, NavLink } from "react-router-dom"



const NavBar = () => {






  return (
    <nav className="navbar is-link is-spaced ">
      <div className="is-flex p-2 container">

        <Link to="/" className="container navbar-brand">
          <figure>
            <img src={brandLogo} width={150} alt="logo" />
          </figure>
        </Link>

          <span role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu-fs">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        

        <div id="navbarMenu-fs" className="navbar-menu">
          <ul className="navbar-end mr-5">
            <li className="navbar-item p-1">
              <NavLink to="/category/lego" className="button is-info" >Lego</NavLink>
            </li>
            <li className="navbar-item p-1">
              <NavLink to="/category/playmobil" className="button is-info">Playmobil</NavLink>
            </li>
            <li className="navbar-item p-1">
              <NavLink to="/category/meccano" className="button is-info">Meccano</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <CartWidget/>
        </div>

      </div>
    </nav>
  );

 
};

export default NavBar;
