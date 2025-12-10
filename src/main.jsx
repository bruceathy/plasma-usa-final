import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./style/style.css";
import "./style/responsive.css";

import HomePage from "./pages/HomePage";
import VitalsPage from "./pages/VitalsPage";
import ErrorPage from "./pages/ErrorPage";

const client = new QueryClient();

const router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/Vitals", element: <VitalsPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
