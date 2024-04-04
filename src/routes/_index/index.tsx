import { Box, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_index/')({
  component: Index,
})

function Index() {
  return (
    <Box>
      <Typography>Carousel</Typography>
    </Box>
  )
}