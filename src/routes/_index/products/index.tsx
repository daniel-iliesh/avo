import { createFileRoute } from '@tanstack/react-router'
import Products from '../../../components/store/Products'

export const Route = createFileRoute('/_index/products/')({
  component: Products
})