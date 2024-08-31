import { render, screen, within, fireEvent } from "@testing-library/react";
import Item, { ItemProps } from "../item";

const defaultItem: ItemProps = {
  description: "description",
  packed: false,
  quantity: 1,
  id: 1,
  onRemoveItem: jest.fn(),
  onTogglePacked: jest.fn(),
};

describe(`${Item.name} component`, () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a correct CSS component when the packed is TRUE", () => {
    const propsWithPacked = {
      ...defaultItem,
      packed: true,
    };

    render(<Item {...propsWithPacked} />);

    const item = screen.getByTestId("item") as HTMLLIElement;

    const {
      style: { textDecoration },
    } = within(item).getByText(
      `${propsWithPacked.quantity} - ${propsWithPacked.description}`
    ) as HTMLSpanElement;

    expect(textDecoration).toBe("line-through");
  });

  it("should render a correct CSS component when the packed is FALSE", () => {
    render(<Item {...defaultItem} />);

    const item = screen.getByTestId("item") as HTMLLIElement;

    const {
      style: { textDecoration },
    } = within(item).getByText(
      `${defaultItem.quantity} - ${defaultItem.description}`
    ) as HTMLSpanElement;

    expect(textDecoration).toBe("");
  });

  it("should be possible called the function to change packed status when the checkbox is check", () => {
    render(<Item {...defaultItem} />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox, { target: { checked: true } });
    expect(defaultItem.onTogglePacked).toHaveBeenCalledWith(defaultItem.id);
  });

  it("should be possible called the function to remove a item when the button is pressed", () => {
    render(<Item {...defaultItem} />);

    const item = screen.getByTestId("item") as HTMLLIElement;

    const button = within(item).getByRole("button") as HTMLButtonElement;

    fireEvent.click(button);

    expect(defaultItem.onRemoveItem).toHaveBeenCalledWith(defaultItem.id);
  });
});
