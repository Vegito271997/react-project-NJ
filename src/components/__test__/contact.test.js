import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact-us component", () => {
  render(<ContactUs />); // rendering contact component

  const heading = screen.getByRole("heading"); // screen is used to find particular tag inside the component

  expect(heading).toBeInTheDocument();
});

test("Should load  button inside contact-us component", () => {
  render(<ContactUs />); // rendering contact component

  const heading = screen.getByRole("panel");
  const panel = screen.getByText("Submit");

  expect(heading).toBeInTheDocument();
});
