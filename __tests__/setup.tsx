import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { StoreProvider } from "@/providers/Store";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <StoreProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </StoreProvider>,
  );
};
