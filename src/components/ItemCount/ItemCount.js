import {useState} from 'react';
import "./ItemCount.css" 


const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity]=useState(initial);


    const increment = () =>{
        quantity < stock && setQuantity(quantity + 1)
    }
    const decrement = () =>{
        quantity > 0 && setQuantity(quantity - 1)
    }


  return (
    <div className="container-main">

        <div className="content-f">

            <div className="container-title">
                <h3 className="title-f">Nombre Producto</h3>
            </div>

            <div className="container-controls">
                <button onClick={increment} className="button is-info">+</button>
                <span className="stock-number">{quantity}</span>
                <button onClick={decrement} className="button is-info">-</button>
            </div>

            <div className="container-button">
                <button className="button is-dark" 
                onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito
                </button>
            </div>

        </div>

    </div>
  )
}

export default ItemCount