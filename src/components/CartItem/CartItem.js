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
              <figure>
                <img src={prod.img} alt={prod.name} width={220}></img>
              </figure>

              <div>
                  <h4 className="is-size-7" >{prod.category.toUpperCase()}</h4>
                  <h3 className="title is-4">{prod.name}</h3>
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