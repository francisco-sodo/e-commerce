import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'




const Cart = () => {

  const {clearCart, totalQuantity, total} = useContext(CartContext)

  if(totalQuantity() === 0 ){
    return (
      <div className="container">
        <h2 className="title">Carrito vacio, buuuh!</h2>
        <Link to='/'>Ver Productos</Link>
      </div>

    )
  }

  return (
      <div className="container mt-4">

          <h1 className="title">Carrito</h1>
    
          <div>
            <CartItem/>
          </div>

          <div>
            <h2 className="title is-5">Total: ${total()}</h2>
          </div>

          <div>
            <button onClick={()=> clearCart()}>Limpiar Carrito</button>
          </div>
        
          <div>
            <Link to='/checkout'>Checkout-tramites finales</Link>
          </div>

      </div>
    )


}

export default Cart