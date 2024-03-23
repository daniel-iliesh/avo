import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../components/admin/Dashboard'

export const Route = createFileRoute('/(admin)/dashboard')({
  component: Dashboard,
})