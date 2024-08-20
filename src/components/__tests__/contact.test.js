
import Contact from "../Contact"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact us test cases" ,() => {
    it('should load contact us component', () => { 
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
     });
     it("should load 2 input fields", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
     })
})
