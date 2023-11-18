import {useState, useEffect} from 'react';
import {getProducts} from '../asyncMock'

import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts]=useState([])

    useEffect(()=>{
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])


    return(
        <div className="hero is-medium has-background-link-light">

            <div className="hero-body container">
                <h1 className="title has-text-link-dark">{greeting}</h1>
            </div>

        
            <div className="">
                <ItemList products={products}/>
            </div>
            
        
           
        </div>
    )
}

export default ItemListContainer;