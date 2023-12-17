import {useState, useEffect} from 'react';

import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) =>{

    const [products, setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const collectionRef = categoryId
        ? query(collection(db,'products'), where('category', '==', categoryId))
        : collection (db, 'products')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.error(error)
        })
       
    }, [categoryId])




    return(
        <div className="hero is-small">

            <div className="hero-body container p-6 ">
                <h1 className="title has-text-link-dark has-text-centered is-size-4-touch">{greeting}</h1>
                <h2 className="subtitle is-size-4 is-uppercase has-text-link-dark has-text-weight-bold">{categoryId}</h2>
            </div>    

        
            <div className="mb-6">
                <ItemList products={products}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;