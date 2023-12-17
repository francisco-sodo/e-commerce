import '../../App.css'
import './Checkout.css'
import { Link } from 'react-router-dom'
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

            if(outOfStock.length === 0 ) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')

                const orderAdded =  await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

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
        return <div className='container-f'>
                 <h2>Su orden se esta generando...</h2>    
                </div>
    }
    if(orderId){
        return <div className='container-f'>
                    <div className='success-msg-box'>
                        <h3>Muchas Gracias por tu Compra!</h3>
                        <h2>El id de su orden es: <span>{orderId.slice(-7,-1)}</span></h2>
                    </div>
                    <div className="empty-cart-container" >
                        <Link className="button is-normal is-info mt-5" to="/">Ver Productos</Link>
                    </div>
               </div>
    }

    
  return (
  
        <div className='container-f'>
            <h1 className='title'>Finalizar compra</h1>
            <p className="mb-4">Crea tu orden ingresando los datos solicitados.</p>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    
  )
}

export default Checkout