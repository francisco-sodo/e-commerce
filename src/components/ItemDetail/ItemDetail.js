import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({initial, id,name,category,img,price,stock,description}) => {
  return (
    <div className="container">
        <img src={img} alt={name}/>
        <h2 className="title is-6">{name}</h2>
        <p className="subtitle is-size-7 is-uppercase">{category}</p>
        <h4 className="is-size-6">Precio: ${price}</h4>
        <p className="is-size-7">Stock: {stock}</p>
        <p className="is-size-7">Descripcion: {description}</p>

        <footer>
        <ItemCount initial={initial} stock={stock} onAdd={(quantity)=>console.log("Cantidad agregada ", quantity)}/>
       
        </footer>
    </div>
  )
}

export default ItemDetail