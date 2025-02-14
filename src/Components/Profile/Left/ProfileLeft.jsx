import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import EmergencyIcon from '@mui/icons-material/Emergency';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import PasswordIcon from '@mui/icons-material/Password';
import DataArrayIcon from '@mui/icons-material/DataArray';

const ProfileLeft = () => {
    return (
        <div className=''>
            {/* SIDEBAR PROFILE VIEW */}
            <Box sx={{ backgroundColor: "white", position: "relative" }} className="leftProfilePage border rounded-3">
                {/* COVER PHOTO */}
                <Box className="coverPhoto">
                    <img className='img-fluid border-0 rounded-top-2' width="100%" height={10} src="/imgs/User/Linkedin Cover Photo Design.png" alt="" />
                </Box>
                {/* PROFILE PHOTO */}
                <Box sx={{ padding: "20px", position: "absolute", bottom: "0px" }}>
                    <Box className="profilePhoto" sx={{}} >
                        <img className='border border-2 border-white rounded-pill' width={140} src="/imgs/User/Profile picture.jpg" alt="" />
                    </Box>
                    {/* NAME */}
                    <Box>
                        <h5>Muhammad Saad</h5>
                        <h6 style={{ fontSize: "13px", fontWeight: "semibold", color: "#666666", marginTop: "-5px" }}>Frontend Web Developer | HTML | CSS | Javascript | Bootstrap | ReactJs</h6>
                        <Typography sx={{ fontSize: "13px", display: "inline", fontWeight: "semibold", color: "#666666" }}>Layyah, Punjab Pakistan  <Button sx={{ ":hover": { backgroundColor: "#D0E8FF", borderRadius: "13px" }, fontSize: "13px" }} className='text-website cp text-capitalize fw-semibold'>Contact Info</Button></Typography>
                        <Typography sx={{ fontSize: "13px" }} className='text-website cp text-capitalize fw-semibold'>500+ Connections</Typography>
                        <Box className="d-flex align-items-center gap-2 mt-3">
                            <Button
                                sx={{ ":hover": { backgroundColor: "#0865BD" },color:"#9FDFFF",borderRadius: "23px", fontSize: "13px" }}
                                className='text-white cp text-capitalize fw-semibold'
                                variant='contained'
                                size='small'
                            >
                                Open To
                            </Button>
                            <Button
                                sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color:"#9FDFFF",borderRadius: "23px", fontSize: "13px" }}
                                className='text-website cp text-capitalize fw-semibold'
                                variant='outlined'
                                size='small'
                            >
                                Add Profile Section
                            </Button>
                            <Button
                                sx={{ ":hover": { backgroundColor: "#D0E8FF" }, color:"#9FDFFF",borderRadius: "23px", fontSize: "13px" }}
                                className='text-website cp text-capitalize fw-semibold'
                                variant='outlined'
                                size='small'
                            >
                                Enhance Profile
                            </Button>
                            <Button
                                sx={{ ":hover": { backgroundColor: "#D0E8FF" },color:"#9FDFFF",borderRadius: "23px", fontSize: "13px" }}
                                className='text-website cp text-capitalize fw-semibold'
                                variant='outlined'
                                size='small'
                            >
                                Add Profile Section
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* SIDE BAR RECENT VIEW */}
            <Box sx={{ backgroundColor: "white", position: "relative", height: "220px" }} className="border-0 rounded-3 mt-3 p-3">
                <h4>Recent</h4>

                <Box className="mt-2 d-flex flex-column gap-2">
                    <Typography sx={{ color: "#666666", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", ":hover": { textDecoration: "underline" } }}><CodeIcon />programming</Typography>
                    <Typography sx={{ color: "#666666", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", ":hover": { textDecoration: "underline" } }}><PasswordIcon />system management</Typography>
                    <Typography sx={{ color: "#666666", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", ":hover": { textDecoration: "underline" } }}><GitHubIcon />github</Typography>
                    <Typography sx={{ color: "#666666", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", ":hover": { textDecoration: "underline" } }}><JavascriptIcon />javascript</Typography>
                    <Typography sx={{ color: "#666666", fontWeight: "600", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", ":hover": { textDecoration: "underline" } }}><DataArrayIcon />arrays</Typography>
                </Box>
            </Box>

        </div>
    )
}

export default ProfileLeft

