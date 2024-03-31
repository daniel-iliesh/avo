import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <div>Admin Layout</div>
      <hr />
      <Outlet />
    </div>
  )
}
