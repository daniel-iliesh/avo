import { Box, Stack } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box bgcolor="red" height={70}>
      <Stack direction="row" justifyContent="space-between" >
        <Box>Logo</Box>
        <Box>Logout</Box>
      </Stack>
    </Box>
  )
}

export default Header