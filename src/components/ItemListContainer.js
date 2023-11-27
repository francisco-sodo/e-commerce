import {useState, useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../asyncMock'
import ItemList from "./ItemList/ItemList";

import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) =>{

    const [products, setProducts]=useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])


    return(
        <div className="hero is-small">

            <div className="hero-body container p-6">
                <h1 className="title has-text-link-dark">{greeting}</h1>
            </div>

        
            <div className="">
                <ItemList products={products}/>
            </div>
            
        
           
        </div>
    )
}

export default ItemListContainer;