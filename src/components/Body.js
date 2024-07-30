import resobj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    return (
        <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
           {
            resobj.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
           }
        </div>
        </div>
    )
}
export default Body;