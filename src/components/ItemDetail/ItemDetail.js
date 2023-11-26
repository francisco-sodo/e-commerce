import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from 'react-router-dom'


const ItemDetail = ({initial, id,name,category,img,price,stock,description}) => {


  
  return (
    <div className="main-container">
      <Link to='/'>Volver</Link>
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
            <ItemCount initial={initial} stock={stock} onAdd={(quantity)=>console.log("Cantidad agregada ", quantity)}/>
          </div>

        </section>

    
      </div>
    </div>
  )
}

export default ItemDetail