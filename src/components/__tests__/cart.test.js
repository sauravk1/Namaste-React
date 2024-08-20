import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import AppStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("shpuld load Restaurant mwnu component", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={AppStore}>
            
            
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    
))
const accHeader = screen.getByText("Recommended (2)"); 
 fireEvent.click(accHeader);
//expect(screen.getAllByTestId("foodItems").length).toBe(2);
const addBtn = screen.getAllByRole("button", {name: "Add +"});
fireEvent.click(addBtn[0]);
expect(screen.getByText("cart-(1)")).toBeInTheDocument();
//expect(screen.getAllByText())
})