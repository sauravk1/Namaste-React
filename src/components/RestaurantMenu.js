import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCatogory";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

if (resInfo === null ) return <Shimmer />
console.log("res", resInfo)
const {name, cuisines, costForTwo,id} = resInfo?.data?.cards[2]?.card?.card?.info;
const { itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
const categories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter ( c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
return  (
    <div className="text-center">
        <h1 className="font-bold my-6">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        {/* categories accordin */}
        {categories.map((category, index) => <RestaurantCatogory key = {index} data = {category?.card?.card} />)}
        
    </div>
  )
}

export default RestaurantMenu;