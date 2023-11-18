// import "boxicons/css/boxicons.min.css";

const CartWidget = ({number}) =>{

    return(
        <div className="navbar-item">
            <button className="button is-danger">
                <span className="icon-text">
                    <span className="icon">
                        <i className='bx bxs-cart bx-sm'></i>
                    </span>
                    <span>{number}</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget;