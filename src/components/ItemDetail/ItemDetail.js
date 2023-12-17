import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, name, category, img, price, stock, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price, category, img }
        addItem(item, quantity)
   
}




  return (
    <div className="main-container">

      <Link to='/'>
        <button className=" button p-2 mb-2 is-small is-dark">{"< Volver"}</button>
      </Link>

      <div className="sub-container">
        <section>
          <figure className="figure-img">
            <img src={img} alt={name}/>
          </figure> 
        </section>

        <section className="info-content">
          <div>
            <h2 className="title is-3">{name}</h2>
            <h4 className="subtitle is-size-5 is-uppercase">{category}</h4>
            <p className="is-size-6 mb-4">{description}</p>
            <h4 className="is-size-4 mb-4">Precio: ${price}</h4>
            <p className="is-size-6">Stock: {stock}</p>
          </div>

          <div>
            {
              quantityAdded > 0 
              ? (<Link className="button is-success is-light" to="/cart">
                <span class="icon is-medium"><i class='bx bxs-flag-checkered bx-tada is-size-5' ></i></span>
                <span>Terminar compra</span></Link>) 
              : (<ItemCount stock={stock} onAdd={handleOnAdd}/>) 
            } 
          </div>
        </section>

      </div>
    </div>
  )
}

export default ItemDetail