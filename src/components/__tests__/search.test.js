import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import   "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with search button", async () => {
 
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
     fireEvent.change(searchInput, {target: {value: "urban"}});
    //await fireEvent.click(searchBtn);
    // const cards = await screen.getAllByTestId("res-card");
    // expect(cards.length).toBe(1);
    expect(searchBtn).toBeInTheDocument();

   

})