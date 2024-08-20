
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    //dispatch action
    dispatch(addItem(item))
  }

  return (
    <div>
            {items.map(item => <div data-resid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> -₹ {item.card.info.price/100}</span>
                </div>
                
                <p className=" text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="px-1 mx-14  bg-black rounded-lg text-white shadow-lg"
                  onClick={() =>handleAddToCart(item)}
                  >
                    Add +
                  </button>
                  </div>
                <img className="w-full" src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} alt="" />
                </div>
                
            </div>)}
    </div>
  )
}

export default ItemList;