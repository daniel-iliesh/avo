import { createFileRoute } from "@tanstack/react-router";
import Products from "../../../components/store/Products";

export const Route = createFileRoute("/_store/products/")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <Products />
  )
}
