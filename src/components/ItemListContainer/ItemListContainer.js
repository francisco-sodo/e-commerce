const ItemListContainer = ({greeting}) =>{

    return(
        <div className="hero is-medium has-background-link-light">
            <div className="hero-body container">
                <h1 className="title has-text-link-dark">{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer;