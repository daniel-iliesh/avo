import { createFileRoute } from '@tanstack/react-router'
import Collection from '../../../components/store/Collection'

export const Route = createFileRoute('/_store/collections/$id')({
  component: Collection
})