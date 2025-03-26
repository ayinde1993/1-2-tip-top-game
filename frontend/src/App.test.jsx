import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./containers/About";
import Contact from "./containers/Contact";

test("renders About route", () => {
  render(<About />);

  // Check that content specific to About is rendered
  const aboutElement = screen.getByText(
    /Page A Propos en cours de construction.../i
  ); // Adjust based on content in About component
  expect(aboutElement).toBeInTheDocument();
});

test("renders Contact route", () => {
  render(<Contact />);

  // Check that content specific to Contact is rendered
  const contactElement = screen.getByText(/contactez-nous/i); // Adjust based on content in Contact component
  expect(contactElement).toBeInTheDocument();
});

// You can add similar tests for other routes (Rules, Profile, Prize, Legalites)
