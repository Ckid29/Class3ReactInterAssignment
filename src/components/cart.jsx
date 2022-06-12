import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./ProductInCart";

const Cart= () => {
    let cart = useContext(StoreContext).cart;

    const getTotal = () => {}
        let  total = 0;
        for (let i = 0; i< cart.length; i++) {
            let prod = cart[i];
            total += prod.price*
        }
    return (
        <div className="cart">
            <h6>We have {cart.length} product ready for you. </h6>
            <h3>Are you ready to place the order ?</h3>
            <hr />
        

            <div className="parent">
                <div className="products">
                    {cart.map((prod) => (
                        <ProductInCart key={prod._id} data={prod}></ProductInCart>
                    ))}
                </div>
            
                <div className="total-panel">
                    <h3>Your total:</h3>
                    <h2>$9,998.98</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;