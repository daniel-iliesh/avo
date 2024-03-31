import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_store/collections")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return <Outlet />
}