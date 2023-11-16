import CartWidget from "../CartWidget/CartWidget";
import brandLogo from "./assets/brand-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar is-link is-spaced">
      <div className="is-flex p-2 container">

        <div className="container navbar-brand">
          <figure>
            <img src={brandLogo} width={150} alt="logo" />
          </figure>

          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-menu">
            <li className="navbar-item p-1">
              <a href="#" className="button is-info is-light">Categoria 1</a>
            </li>
            <li className="navbar-item p-1">
              <a href="#" className="button is-info is-light">Categoria 2</a>
            </li>
            <li className="navbar-item p-1">
              <a href="#" className="button is-info is-light">Categoria 3</a>
            </li>
            <li className="navbar-item p-1">
              <a href="#" className="button is-info is-light">Categoria 4</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <CartWidget number={0} />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
