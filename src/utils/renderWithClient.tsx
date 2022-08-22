// https://raw.githubusercontent.com/TkDodo/testing-react-query/main/src/tests/utils.tsx
import { render } from "@testing-library/react";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

interface RenderWithRouterProps {
    route?: string;
    ui: React.ReactNode | React.ReactElement,
    client?: QueryClient
}

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

export function renderWithClient(
   { client = createTestQueryClient(),
    ui,
    route = "/",
    }: RenderWithRouterProps
) {
    const { rerender, ...result } = render(
        <MemoryRouter initialEntries={[route]}>
            <QueryClientProvider client={client}>{ui}</QueryClientProvider>
        </MemoryRouter>
    );
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(
                <MemoryRouter initialEntries={[route]}>
            <QueryClientProvider client={client}>{ui}</QueryClientProvider>
        </MemoryRouter>
            ),
    };
}