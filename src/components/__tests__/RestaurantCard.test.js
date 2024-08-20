import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../utils/mockData";
import  "@testing-library/jest-dom";

it("should render Restaurnt card component with data", () => {
    render(<RestaurantCard  resData = {MOCK_DATA}/>); 
   
})