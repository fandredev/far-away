import { render, screen } from "@testing-library/react";
import Logo from "../logo";

describe(`${Logo.name} component`, () => {
  it("should render components no errors when the component is rendered", () => {
    render(<Logo />);

    const findTitle = screen.getByText(/Far Away/i);

    expect(findTitle).toBeInTheDocument();
  });
});
