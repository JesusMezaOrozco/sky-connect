import React from "react";
import { fireEvent } from "@testing-library/react";
import Searcher from "@/components/shared/searcher/Searcher";
import { renderWithProviders } from "./setup";

describe("Searcher component", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <Searcher onChange={jest.fn()} />,
    );
    expect(getByPlaceholderText("Search Airports...")).toBeInTheDocument();
    expect(getByText("Search")).toBeInTheDocument();
  });

  it("should update input value on change", () => {
    const { getByPlaceholderText } = renderWithProviders(
      <Searcher onChange={jest.fn()} />,
    );
    const input = getByPlaceholderText("Search Airports...");
    fireEvent.change(input, { target: { value: "New York" } });
    expect(input).toHaveValue("New York");
  });

  it("should call onChange prop when search button is clicked", () => {
    const handleChange = jest.fn();
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <Searcher onChange={handleChange} />,
    );
    const input = getByPlaceholderText("Search Airports...");
    fireEvent.change(input, { target: { value: "New York" } });
    fireEvent.click(getByText("Search"));
    expect(handleChange).toHaveBeenCalledWith("New York");
  });

  it("should call onChange prop when Enter key is pressed", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = renderWithProviders(
      <Searcher onChange={handleChange} />,
    );
    const input = getByPlaceholderText("Search Airports...");
    fireEvent.change(input, { target: { value: "New York" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(handleChange).toHaveBeenCalledWith("New York");
  });

  it("should display info message when input has value", () => {
    const { getByPlaceholderText, getByText } = renderWithProviders(
      <Searcher onChange={jest.fn()} />,
    );
    const input = getByPlaceholderText("Search Airports...");
    fireEvent.change(input, { target: { value: "New York" } });
    expect(
      getByText("You are searching into airports previously fetched!"),
    ).toBeInTheDocument();
  });
});
