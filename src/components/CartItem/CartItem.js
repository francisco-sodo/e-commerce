import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css";

const CartItem = () => {

const {cart, removeItem} = useContext(CartContext)




  return (
    <div>
           {
           cart.map((prod) => (

             <div className="item-container-cart" key={prod.id} {...prod} >

             
              {/* <img src={prod.img} alt={prod.name}/> */}
             

              <div>
                  <h3 className="title is-5">{prod.name}</h3>
                  <p>Precio unitario: ${prod.price}</p>
                  <p>Cantidad: {prod.quantity}</p>
                  <p className="has-text-weight-bold">Precio total: ${prod.price * prod.quantity}</p>
              </div>
              <div>
                  <button className="button is-small is-danger is-light" 
                  onClick={()=> removeItem(prod.id)}>Quitar producto</button>
               </div>
               
             </div>
             
           ))
           
           }
           

    </div>
  )
}

export default CartItem