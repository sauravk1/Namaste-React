import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    // subscribing to store using useSelector
    const cartitems = useSelector((store) => store.cart.items);
    console.log(cartitems)
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg'>
            <div className='logo-container'>
                <img className='w-56' src={LOGO_URL} alt='food-logo' />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">  <Link to="/">Home</Link></li>
                    <li className="px-4">  <Link to="/about">About</Link> </li>
                    <li className="px-4"> <Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link> </li>
                    <li className="px-4 font-bold"><Link to="/cart">cart ({cartitems.length})</Link></li>
                    <li className="px-4">{data.loggedIn}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;