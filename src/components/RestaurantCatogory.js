import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogory = ({data}) => {
    const [showItem, setShowItem] = useState(false);
    console.log(data)
  return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div onClick={() => setShowItem(!showItem)} className="cursor-pointer flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span >🔽</span>
            </div>
            {showItem && <ItemList items = {data.itemCards} /> }
        </div>
       
    </div>
  )
}

export default RestaurantCatogory;