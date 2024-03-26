import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "@mui/material";

export const Route = createFileRoute("/_store/home")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return <Typography>Home</Typography>;
}
