import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/dashboard')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}
