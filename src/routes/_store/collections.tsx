import { createFileRoute } from "@tanstack/react-router";
import { Collections } from "../../components/store/Collections";

export const Route = createFileRoute("/_store/collections")({
  component: Collections,
});
