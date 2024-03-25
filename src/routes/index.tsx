import { Box, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Box>
      <Typography>Welcome Home!</Typography>
    </Box>
  )
}