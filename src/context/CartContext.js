import { createContext, useState } from "react";



export const CartContext = createContext(
    {
        cart:[]
    });

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    //si el producto esta o no esta en el carrito
   const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

    // agregar nuevo producto al carrito
    const addItem = (item, quantity) => { 
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])    
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    //eliminar producto/s del carrito
    const removeItem = (itemId) => {	
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        console.log("item eliminado")
    }

    // limpiar todo el carrito
    const clearCart = () => {
        setCart([])
    }
    // cantidad total de items en el carrito
    const totalQuantity = () =>{
       return cart.reduce((acc,prod)=> acc + prod.quantity, 0) 
    }
    // limpiar todo el carrito
    const total = () =>{
        return  cart.reduce((acc,prod)=> acc + prod.price * prod.quantity, 0)  
     }


   

   

    
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    );
}




export default CartProvider;
