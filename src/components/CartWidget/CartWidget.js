// import "boxicons/css/boxicons.min.css";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'



const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    
    return(
        
            <Link to='/cart' className="button is-danger"
            style={{display: totalQuantity() > 0 ? 'flex' : 'none'}}>
                
                <div className="icon">
                    <i className='bx bxs-cart bx-sm'></i>
                </div>
                
                <span>{totalQuantity()}</span>
            </Link>
       
    )
}

export default CartWidget;


