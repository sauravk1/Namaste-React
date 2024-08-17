import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        //dispatch action
        dispatch(clearCart());
    }
    //subscribe the store using useSelector
    const cartItems = useSelector((store) => store.cart.items)
    return <div className="text-center" m-10 p-10>
        <h1 className="text-2xl">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
            <ItemList items = {cartItems} />
        </div>
    </div>
}
export default Cart;