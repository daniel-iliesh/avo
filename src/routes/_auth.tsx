import { Outlet, createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_auth')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Outlet />
    </div>
  )
}
