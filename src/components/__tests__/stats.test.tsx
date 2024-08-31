import { render, screen } from "@testing-library/react";
import Stats from "../stats";
import { PackingListItemProps } from "../item";

describe(`${Stats.name} component`, () => {
  it("renders correct stats when items are empty", () => {
    const items: PackingListItemProps[] = [];

    render(<Stats items={items} />);

    const messageElement = screen.getByText(
      /Start adding some items to your packing list/i
    );
    const tag = messageElement.tagName.toLowerCase();

    expect(messageElement).toBeInTheDocument();
    expect(tag).toBe("em");
  });

  it("renders correct stats when items are not empty", () => {
    const items: PackingListItemProps[] = [
      {
        id: 1,
        description: "description 1",
        packed: true,
        quantity: 1,
      },
      {
        id: 2,
        description: "description 2",
        packed: false,
        quantity: 2,
      },
      {
        id: 3,
        description: "description 3",
        packed: true,
        quantity: 3,
      },
    ];
    render(<Stats items={items} />);

    const messageElement = screen.getByText(
      /You have 3 items on your list, and you already packed 2 \(67%\)/i
    );
    const tag = messageElement.tagName.toLowerCase();

    expect(messageElement).toBeInTheDocument();
    expect(tag).toBe("em");
  });

  it("renders correct stats when all items are packed", () => {
    const items: PackingListItemProps[] = [
      {
        id: 1,
        description: "description 1",
        packed: true,
        quantity: 1,
      },
      {
        id: 2,
        description: "description 2",
        packed: true,
        quantity: 2,
      },
      {
        id: 3,
        description: "description 3",
        packed: true,
        quantity: 3,
      },
    ];
    render(<Stats items={items} />);

    const messageElement = screen.getByText(
      /🎉 You got everthing! Ready to go💼/i
    );
    const tag = messageElement.tagName.toLowerCase();

    expect(messageElement).toBeInTheDocument();
    expect(tag).toBe("em");
  });

  it("renders correct stats when no items are packed", () => {
    const items: PackingListItemProps[] = [
      {
        id: 1,
        description: "description 1",
        packed: false,
        quantity: 1,
      },
      {
        id: 2,
        description: "description 2",
        packed: false,
        quantity: 2,
      },
      {
        id: 3,
        description: "description 3",
        packed: false,
        quantity: 3,
      },
    ];
    render(<Stats items={items} />);

    const messageElement = screen.getByText(
      /You have 3 items on your list, and you already packed 0 \(0%\)/i
    );
    const tag = messageElement.tagName.toLowerCase();

    expect(messageElement).toBeInTheDocument();
    expect(tag).toBe("em");
  });
});
