import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";
import emptyCart from './assets/empty-cart.png'

const Cart = () => {
  const { clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="main-container-cart">

        <div className="empty-cart-container">
          <h2 className="title">Carrito vacio, buuuh!</h2>
          <img src={emptyCart} width={400} alt="Carrito Vacio" />
        </div>

        <div className="empty-cart-container" >
          <Link className="button is-normal is-info" to="/">Ver Productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container-cart">

        <section className="header-container-cart">
            <h1 className="title">Carrito</h1>
            <h2 className="title is-4 has-text-link">Total: ${total()}</h2>
        </section>
      
        <section >
          <CartItem />
        </section>

        <section className="container is-flex is-flex-direction-column is-align-items-center">
          <div>
            <Link className="button is-normal is-success m-4" to="/checkout">Finalizar Compra</Link>
          </div>
        
          <div>
            <button className="button is-small is-danger is-outlined mt-6" onClick={() => clearCart()}>
              <span class="icon"><i class="bx bx-x "></i></span>
              <span>Limpiar todos los productos del Carrito</span>
            </button>
          </div>
        </section>

      </div>

    
  );
};

export default Cart;
