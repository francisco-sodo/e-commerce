import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="main-container-cart">
        <h2 className="title">Carrito vacio, buuuh!</h2>
        <div>
          <Link className="button is-normal is-info" to="/">Ver Productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container-cart">

        <section className="header-container-cart">
            <h1 className="title">Carrito</h1>
            <h2 className="title is-5">Total: ${total()}</h2>
        </section>
      
        <section >
          <CartItem />
        </section>

        <section className="container is-flex is-flex-direction-column is-align-items-center">
          <div>
            <Link className="button is-normal is-link m-4" to="/checkout">Checkout</Link>
          </div>
        
          <div>
            <button className="button is-normal is-danger  mt-6" onClick={() => clearCart()}>Limpiar Carrito</button>
          </div>
        </section>

      </div>

    
  );
};

export default Cart;
