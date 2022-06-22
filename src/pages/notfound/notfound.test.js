import { render, screen } from "@testing-library/react";

import NotFound from "./index";

it("renders page not found", () => {
  render(<NotFound />);
  expect(screen.getByText("Not found, please try another URL.",)).toBeInTheDocument();
});
