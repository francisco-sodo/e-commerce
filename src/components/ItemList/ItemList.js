import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {


  return (
        <div className="main-container">
          <div className="grid-container"> 
            {
              products.length > 0 
              ? products.map(prod => <Item key={prod.id} {...prod}/>)
              : <p>Cargando...</p>
            }
          </div>
        </div>
    
  ) 
  }
     

export default ItemList