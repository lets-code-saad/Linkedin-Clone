import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./ProfileRight.css"
import { useSelector } from 'react-redux'

const ProfileRight = () => {


    // STATE FOR DYNAMICALLY UPDATING THE LINK
    // GETTING THE DYNAMIC CHANGE IN THE PROFILE URL FROM STATE
    const { contactProfile } = useSelector((state) => state.contactInfoSlice)

    return (
        <div className='profilePageRight'>

            {/* SIDE BAR PROFILE LINKS & LANGUAGE */}
            <Box sx={{ backgroundColor: "white", height: "auto" }} className="border rounded-3 p-3">
                <Box className="rightData align-items-center">
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <h6>Profile Language</h6>
                            <Typography sx={{ fontSize: "13px", color: "#666666" }}>English</Typography>
                        </Box>
                        <Box className="border-0 rounded-pill" sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" }, padding:"10px" }} >
                            <iconify-icon  icon="ic:outline-edit" width="24" height="24"></iconify-icon>
                        </Box>

                    </Box>
                    <Divider sx={{marginTop:"10px"}} component="" />
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:"15px" }}>
                        <Box>
                            <h6>Public profile & URL</h6>
                            <Typography sx={{ fontSize: "13px", color: "#666666" }}>{contactProfile}</Typography>
                        </Box>
                        <Box className="border-0 rounded-pill" sx={{ ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" }, padding: "10px" }} >
                            <iconify-icon icon="ic:outline-edit" width="24" height="24"></iconify-icon>
                        </Box>

                    </Box>
                </Box>
            </Box>

            {/* SIDE BAR ADD IMG */}
            <Box sx={{ backgroundColor: "white", height: "auto" }} className="border rounded-3 mt-2">
                <img className='img-fluid border-0 rounded-3' src="/imgs/General/see who's hiring on in.jpeg" alt="" />
            </Box>

        </div>
    )
}

export default ProfileRight
