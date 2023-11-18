import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {


  return (
        <div className="main-container">
          <div className="grid-container"> 
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
          </div>
        </div>
    
  ) 
  }
     

export default ItemList