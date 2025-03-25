import { server } from "../mock/server";
import { http, HttpResponse } from "msw";
import { renderWithProviders } from "../setup";
import { useSearchParams, useRouter } from "next/navigation";
import { Airports } from "../mock/data";
import { screen } from "@testing-library/dom";
import Home from "@/components/pages/Home";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

describe("getAirport service", () => {
  it("should fetch airports successfully", async () => {
    server.use(
      http.get("/api/airports", () => {
        return HttpResponse.json({
          data: Airports,
          pagination: {
            total: Airports.length,
          },
        });
      }),
    );
    const mockUseSearchParams = useSearchParams as jest.Mock;
    mockUseSearchParams.mockReturnValue({
      get: (key: string) => {
        if (key === "offset") {
          return "0";
        }
        return null;
      },
    });

    const mockUseRouter = useRouter as jest.Mock;
    mockUseRouter.mockReturnValue({
      push: jest.fn(),
      asPath: "/?offset=0",
    });

    renderWithProviders(<Home />);

    const airportsRendered = await screen.findAllByRole("heading", {
      level: 4,
    });
    expect(airportsRendered.length).toBe(Airports.length);

    mockUseSearchParams.mockRestore();
    mockUseRouter.mockRestore();
  });
});
