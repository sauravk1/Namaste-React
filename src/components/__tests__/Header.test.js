import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import AppStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header test cases" ,() => {
    it("should check 0 items in cart", () => {
        render(
            <BrowserRouter>
            <Provider store={AppStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )
    });
    // const cart = screen.getByRole("Link", {name: "cart-(0)"});
    // expect(cart).toBeInTheDocument();
})