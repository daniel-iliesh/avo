import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Typography } from '@mui/material'

export const Route = createFileRoute('/_home/home')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <Typography>Home</Typography>
  )
}
