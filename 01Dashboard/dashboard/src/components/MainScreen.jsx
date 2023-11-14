import React from 'react'
import { Box } from "@mui/material"
import OuterBox from './OuterBox';
const MainScreen = () => {

    return (
        <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#98FB98", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <OuterBox />
        </Box>
    )
}

export default MainScreen