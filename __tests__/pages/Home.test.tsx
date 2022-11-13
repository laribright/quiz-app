import { screen, render } from "@testing-library/react";

import Home from "@/pages/index";

it("renders the home page with Hello world text", () => {
  render(<Home />);

  const mainElement = screen.getByRole("heading", { name: "Hello world", level: 1 });

  expect(mainElement).toBeInTheDocument();
});
