import { Outlet, createFileRoute } from "@tanstack/react-router";
import Header from "../components/store/Header";
import { Box } from "@mui/material";

export const Route = createFileRoute("/_store")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <Box>
      <Header />
      <Box padding={2} width="100%">
        <Outlet />
      </Box>
    </Box>
  );
}
