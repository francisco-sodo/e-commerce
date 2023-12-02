import{ useState, useEffect } from 'react';
import {getProductById} from '../../asyncMock.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

   const {itemId} = useParams()

    useEffect(() => {
      getProductById(Number(itemId))
      .then(response => {
        setProduct(response)
      })
    
      .catch(error => {
        console.error(error)
      })
    },[itemId])
 
  return (
    <div className='section'>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer