import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders", () => {
    render(<Footer />);
    expect(screen.getByText(/點點簽/i)).toBeDefined();
  });
});
