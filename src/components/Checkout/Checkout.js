import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { db } from '../../services/firebase/firebaseConfig'
import { collection, getDocs, query, where, documentId, addDoc, Timestamp, writeBatch } from 'firebase/firestore'

import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    

    const createOrder = async({name, phone, email }) => {

        setLoading(true)

        try {
            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
//!ACA ESTA EL PROBLEMA
            if(outOfStock.length === 0 ) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')

                const orderAdded =  await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
//!ACA ESTA EL PROBLEMA
            } else{
                console.error("Hay productos sin stock")
            }
            
        } catch(error){
            console.log(" ALGO SALIO MAL " + error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading){
        return <h2>Su orden se esta generando...</h2>
    }
    if(orderId){
        return <h2>El id de su orden es: {orderId}</h2>
    }

    
  return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    
    </div>
    
  )
}

export default Checkout