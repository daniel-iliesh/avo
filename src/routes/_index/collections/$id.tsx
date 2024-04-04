import { createFileRoute } from '@tanstack/react-router'
import Collection from '../../../components/store/Collection'

export const Route = createFileRoute('/_index/collections/$id')({
  component: Collection
})