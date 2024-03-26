import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient();

const avoDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#196E47",
    },
  },
});

const avoLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#196E47",
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={avoLightTheme}>
          <CssBaseline />
          <Outlet />
          <TanStackRouterDevtools />
          <ToastContainer position="bottom-right" />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  ),
});
