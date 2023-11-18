

const Item = ({id,name,category,img,price,stock,description}) => {



  return (

      <article className="card m-2">

        
        <div className="card-image">
          <figure className="image is-4by3">
            <img className="" src={img} alt={name} />
          </figure>
        </div>

        
        <div className="card-content">
          <div className="content">
            <h3 className="title is-6">{name}</h3>
            <p className="subtitle is-size-7 is-uppercase">{category}</p>
            <h4 className="is-size-6">Precio: ${price}</h4>
            <p className="is-size-7">Stock: {stock}</p>
          </div>
        </div>
        

        <div className="card-footer has-background-info-light">
          <div className="card-footer-item">
            <button className="button is-info is-light is-normal">Ver detalles</button>
          </div>
        </div>

      </article>

  )
}

export default Item