import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Preloader = () => {
  return (
    <>
     <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
    </>
  )
}

export default Preloader