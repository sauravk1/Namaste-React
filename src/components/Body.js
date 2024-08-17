import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {

  //state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedList, setsearchedList] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
      fetchData();
    },[]);
    const fetchData = async ()  => {
      const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json =await  data.json();
      const rrr = json.data.cards.filter(r => r.card?.card?.gridElements?.infoWithStyle?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle" && r.card?.card?.gridElements?.infoWithStyle?.theme === "SeoRestaurantListingGridWidget");
      setListOfRestaurants(rrr[0].card.card.gridElements.infoWithStyle.restaurants);
      setsearchedList(rrr[0].card.card.gridElements.infoWithStyle.restaurants);
    }
    const {loggedIn, setUserName} = useContext(UserContext);
    return searchedList.length === 0 ? <Shimmer /> : (
        <div className='body'>
        <div className='flex'>
          <div className="search m-4 p-4 ">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
              // filters the list
             const searchedList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
             setsearchedList(searchedList);
            }}>Search</button>
          </div>
           <div className="search m-4 p-4 flex items-center">
           <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" 
            onClick={() => {
              //setListOfRestaurants()
              const filteredList = listOfRestaurants.filter( z => z.info.avgRating >4.2);
              setsearchedList(filteredList);
            }}

              >Top Rated Restaurant</button>
           </div>
           <div className="search m-4 p-4 flex items-center">
          <input className="px-4 py-2 m-4 bg-gray-100 rounded-lg" type="text" onChange={(e) =>setUserName(e.target.value)} value={loggedIn}/>
           </div>
        </div>
        <div className='flex flex-wrap'>
           {
            searchedList.map(restaurant => <Link 
              to={"/restaurant/"+restaurant.info.id} >
                {
                  restaurant.info?.isOpen ? (<RestaurantCardPromoted key={restaurant.info.id} resData = {restaurant} />) :  (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/> )
                }
             
              </Link>
            )
           }
        </div>
        </div>
    )
}
export default Body;