import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from 'react-router-dom'
import { useState } from "react";


const ItemDetail = ({initial, id,name,category,img,price,stock,description}) => {

const [quantityAdded, setQuantityAdded] = useState(0)
  
const handleOnAdd = (quantity)=>{
  setQuantityAdded(quantity)
}

  return (
    <div className="main-container">
      <Link to='/'><p className="p-2">{"< Volver"}</p></Link>
      <div className="sub-container" >

        <section>
          <figure className="figure-img">
            <img src={img} alt={name}/>
          </figure> 
        </section>

        <section className="info-content">
          <div>
            
            <h2 className="title is-3">{name}</h2>
            <h4 className="subtitle is-size-5 is-uppercase">{category}</h4>
            <p className="is-size-7 mb-4">{description}</p>
            <h4 className="is-size-4 mb-4">Precio: ${price}</h4>
            
            <p className="is-size-6">Stock: {stock}</p>
            
          </div>

          <div>
            {
              quantityAdded > 0 ? (
                <Link to="/cart">Terminar compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
              )


            }
            
          </div>

        </section>

    
      </div>
    </div>
  )
}

export default ItemDetail