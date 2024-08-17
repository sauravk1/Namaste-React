import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className='m-4 p-4 card w-[200px] rounded-lg h-[400px] bg-gray-200' >
            <img className='rounded-lg' alt='food'
             src={CDN_URL + resData.info.cloudinaryImageId}  />
            <h3 className="font-bold py-4">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}
//Higher order component 
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
    return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard { ...props}/>
        </div>
    )
}
}
export default RestaurantCard;