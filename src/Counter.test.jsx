import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Functionality", () => {
    it("displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={2} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(2);
    });

    it("should increment by 1 if the increment button is clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
        const incrementBtn = getByRole("button", {name: "Increment"});
        fireEvent.click(incrementBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(6);
    });

    it("should decrement by 1 if the decrement button is clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
        const decrementBtn = getByRole("button", {name: "Decrement"});
        fireEvent.click(decrementBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(4);
    });

    it("should reset to 0 if the restart button is clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
        const restartBtn = getByRole("button", {name: "Restart"});
        fireEvent.click(restartBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
})
