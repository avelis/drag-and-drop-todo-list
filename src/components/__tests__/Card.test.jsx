import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Card from "../Card";

describe("Card", () => {
  it("renders a todo", () => {
    render(<Card todo={{ id: 1, text: "buy milk" }} />);
    expect(screen.getByText(/buy milk/)).toBeInTheDocument();
  });

  it("allows users to edit a todo by clicking on it", async () => {
    const saveMock = vi.fn();
    render(<Card todo={{ id: 1, text: "buy milk" }} onChange={saveMock} />);

    await userEvent.click(screen.getByText(/buy milk/));

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    await userEvent.type(
      screen.getByRole("textbox", { name: "text" }),
      " and cookies"
    );
    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(saveMock).toHaveBeenCalledWith({
      id: 1,
      text: "buy milk and cookies",
    });
  });

  it("allows user to delete a card on hover", () => {
    const deleteMock = vi.fn();
    render(<Card todo={{ id: 1, text: "buy milk" }} onDelete={deleteMock} />);

    expect(deleteMock).toHaveBeenCalled();
  });
});
