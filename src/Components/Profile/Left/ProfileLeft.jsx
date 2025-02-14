import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const ProfileLeft = () => {
    return (
        <div>
            {/* SIDEBAR PROFILE VIEW */}
            <Box sx={{ backgroundColor: "white", position: "relative" }} className="leftProfilePage border rounded-3">

                {/* COVER PHOTO */}
                <Box className="coverPhoto">
                    <img className='img-fluid border-0 rounded-top-2'
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        src="/imgs/User/Linkedin Cover Photo Design.png" alt="Cover" />
                </Box>

                {/* PROFILE PHOTO */}
                <Box sx={{ padding: "20px", position: "absolute", bottom: "35px" }}>
                    <Box className="profilePhoto">
                        <img className='border border-2 border-white rounded-pill' width={140} src="/imgs/User/Profile picture.jpg" alt="Profile" />
                    </Box>

                    {/* NAME & EDIT ICON */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mt: 2 }}>

                        {/* LEFT SIDE: Name & Title */}
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Muhammad Saad</Typography>
                            <Typography sx={{ fontSize: "13px", color: "#666666" }}>
                                Frontend Web Developer | HTML | CSS | Javascript | Bootstrap | ReactJs
                            </Typography>
                        </Box>

                        {/* RIGHT SIDE: Edit Icon */}
                        <Box className="border-0 rounded-pill" sx={{ position: "absolute", right: "-170px", top: "110px", padding: "10px" , ":hover": { backgroundColor: "#EBEBEB", cursor: "pointer" }}}>
                            <iconify-icon icon="ic:outline-edit" width="24" height="24"></iconify-icon>
                        </Box>
                        <Box sx={{ position: "absolute", right: "-120px", top:"150px"}}>
                            <Box className="d-flex align-items-center gap-1">
                                <img style={{width:"40px"}} src="/imgs/General/UL New Logo.png" alt="" />
                                <Typography variant='h6' sx={{ fontWeight:"medium",fontSize: "14px", color: "#666666" }}>
                                    University Of Layyah
                                </Typography>
                        </Box>
                        </Box>
                    </Box>

                    {/* LOCATION & CONTACT INFO */}
                    <Typography sx={{ fontSize: "13px", display: "inline", gap: "15px", fontWeight: "semibold", color: "#666666" }}>
                        Layyah, Punjab Pakistan
                        <Button size='small' sx={{ ":hover": { backgroundColor: "#D0E8FF", borderRadius: "13px" }, fontSize: "13px" }} className='text-website cp text-capitalize fw-semibold'>Contact Info</Button>
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }} className='text-website cp text-capitalize fw-semibold'>500+ Connections</Typography>

                    {/* BUTTONS */}
                    <Box className="d-flex align-items-center gap-2 mt-3">
                        <Button
                            sx={{ ":hover": { backgroundColor: "#0865BD" }, color: "#FFFFFF", borderRadius: "23px", fontSize: "13px" }}
                            className='text-white cp text-capitalize fw-semibold'
                            variant='contained'
                            size='small'
                        >
                            Open To
                        </Button>
                        <Button
                            sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                            className='text-website cp text-capitalize fw-semibold'
                            variant='outlined'
                            size='small'
                        >
                            Add Profile Section
                        </Button>
                        <Button
                            sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                            className='text-website cp text-capitalize fw-semibold'
                            variant='outlined'
                            size='small'
                        >
                            Enhance Profile
                        </Button>
                        <Button
                            sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color: "#0865BD", borderRadius: "23px", fontSize: "13px" }}
                            className='text-website cp text-capitalize fw-semibold'
                            variant='outlined'
                            size='small'
                        >
                            Add Profile Section
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default ProfileLeft
