import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";


const Body = () => {

  //state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedList, setsearchedList] = useState([]);
    useEffect(() => {
      fetchData();
    },[]);
    const fetchData = async ()  => {
      const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json =await  data.json();
      setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setsearchedList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
        <div className='filter'>
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => {
              // filters the list
             const searchedList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
             setsearchedList(searchedList);
            }}>Search</button>
          </div>
            <button className="filter-btn" 
            onClick={() => {
              setListOfRestaurants()
              const filteredList = listOfRestaurants.filter( z => z.info.avgRating >4);
              setListOfRestaurants(filteredList);
            }}

              >Top Rated Restaurant</button>
        </div>
        <div className='res-container'>
           {
            searchedList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
           }
        </div>
        </div>
    )
}
export default Body;