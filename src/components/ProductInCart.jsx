import "./ProductInCart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {
    return (
        <div className="product-cart">
            <img className="productImg" src={"/img/" + props.data.image} alt="product"></img>

            <div className="description">
                <h4>{props.data.title}</h4>
                <p>{props.data.category}</p>
            </div>

            <label>${props.data.price.toFixed(2)}</label>
            <label>{props.data.quantity}</label>
            <label>${getTotal()}</label>

            <button className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
};

export default ProductInCart;