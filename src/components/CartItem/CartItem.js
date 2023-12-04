import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = () => {

const {cart, removeItem} = useContext(CartContext)




  return (
    <div>
           {
           cart.map((prod) => (

             <div key={prod.id} >
               <h3 className="subtitle m-1">{prod.name}</h3>
               <p>Precio unitario: ${prod.price}</p>
               <p>Cantidad: {prod.quantity}</p>
               <p>Precio total: ${prod.price * prod.quantity}</p>
          
               <button className="button is-danger is-small" onClick={()=> removeItem(prod.id)}>X</button>
               
             </div>
             
           ))
           
           }
           

    </div>
  )
}

export default CartItem