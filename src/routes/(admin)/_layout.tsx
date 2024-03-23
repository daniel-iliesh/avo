import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'

const Layout = () => {
    return (
        <div>
            <h1>
                Header 
            </h1>
            <Outlet />
        </div>
    )
}

export const Route = createFileRoute('/(admin)/_layout')({
    component: Layout
})