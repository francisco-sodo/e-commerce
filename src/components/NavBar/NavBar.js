import CartWidget from "../CartWidget/CartWidget";
import brandLogo from "./assets/brand-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar is-link is-spaced">
      <div className="container">

        <div className="navbar-brand">
            <img src={brandLogo} width={150} alt="logo" />
         
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="buttons are-normal">
              <button className="navbar-item button is-info is-light">
                Categoria 1
              </button>
              <button className="navbar-item button is-info is-light">
                Categoria 2
              </button>
              <button className="navbar-item button is-info is-light">
                Categoria 3
              </button>
              <button className="navbar-item button is-info is-light">
                Categoria 4
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-end container">
          <CartWidget number={0}/>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
