import { createFileRoute } from '@tanstack/react-router'
import Product from '../../../components/store/Product'

export const Route = createFileRoute('/_store/products/$id')({
    component: Product
})