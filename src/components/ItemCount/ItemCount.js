import {useState} from 'react';
import "./ItemCount.css" 


const ItemCount = ({stock, onAdd}) => {

    const [quantity, setQuantity]=useState(1);

    const increment = () =>{
        quantity < stock && setQuantity(quantity + 1)
    }
    const decrement = () =>{
        quantity > 1 && setQuantity(quantity - 1)
    }

    


  return (
        <div>
            <h3 className="is-size-7 mb-3">Cantidad</h3>
            
            <div className="container-controls">
                <button onClick={increment} className="button is-normal is-warning is-light">
                    <span className="icon is-size-5">
                        <i className='bx bx-plus'></i>
                    </span>
                </button>

                <span>{quantity}</span>

                <button onClick={decrement} className="button is-normal is-warning is-light">
                    <span className="icon">
                        <i className='bx bx-minus'></i>
                    </span>
                </button>
            </div>

            <div>
                <button className="button is-success mt-5" 
                onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito
                </button>
            </div>

        </div>
  )
}

export default ItemCount