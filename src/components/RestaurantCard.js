import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f8'}}>
            <img className='res-logo' alt='food'
             src={CDN_URL + resData.info.cloudinaryImageId}  />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;