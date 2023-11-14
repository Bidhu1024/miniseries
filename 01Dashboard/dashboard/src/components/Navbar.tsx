import React from 'react'

import { Box,Typography } from '@mui/material';
const Navbar = () => {
  return (
    <Box sx={{width:"100%", display:"flex"}}>
      <Box>
      <Typography fontSize={"2.2rem"} fontWeight={"600"} >G</Typography>
      <Typography>Reminds Everything</Typography>
     </Box>

    </Box>
  )
}

export default Navbar