import * as React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '../components/store/Header'
import { Box } from '@mui/material'


export const Route = createFileRoute('/_home')({
    component: LayoutComponent,
})

function LayoutComponent() {
    return (
        <Box>
            <Header />
            <Outlet />
        </Box>
    )
}
