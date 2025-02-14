import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import EmergencyIcon from '@mui/icons-material/Emergency';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import PasswordIcon from '@mui/icons-material/Password';
import DataArrayIcon from '@mui/icons-material/DataArray';
import { Link } from 'react-router-dom';

const LeftHome = () => {
  return (
    <div className=''>
      {/* SIDEBAR PROFILE VIEW */}
      <Box sx={{backgroundColor:"white", position:"relative"}} className="leftProfile border-0 rounded-3">
      {/* COVER PHOTO */}
        <Box className="coverPhoto">
        <img className='img-fluid border-0 rounded-top-2' src="/imgs/User/Linkedin Cover Photo Design.png" alt="" />
        </Box>
      {/* PROFILE PHOTO */}
        <Link to="profile">
        <Box className="profilePhoto" sx={{ position: "absolute", top: "25px", right: "75px" }} >
        <img className='border border-1 border-black rounded-pill' width={80} src="/imgs/User/Profile picture.jpg" alt="" />
        </Box>
        </Link>
        {/* NAME */}
      <Box className="text-center" sx={{position:"absolute", top:"120px", right:"0px", padding:"0 10px"}}>
        <Link className='text-decoration-none' to="profile">
        <h6 className="text-decoration-none text-black">Muhammad Saad</h6>
          <Typography sx={{ fontSize: "12px", fontWeight: "semibold", color: "#666666" }}>Frontend Web Developer | HTML | CSS | Javascript | Bootstrap | ReactJs</Typography>
        </Link>
            <Divider className='mt-3' component="" variant='fullWidth' />
          <Box sx={{ ":hover": { backgroundColor:"#EBEBEB", cursor:"pointer"}}} className="d-flex mt-3 p-1 justify-content-between align-items-center">
        <Typography sx={{color:"#666666", fontWeight:"bold", fontSize:"13px"}}>Who viewed your profile</Typography>
        <Typography sx={{color:"#2E7BCA", fontWeight:"semibold", fontSize:"14px"}}>1,633</Typography>
        </Box>
        <Box sx={{ ":hover": { backgroundColor:"#EBEBEB", cursor:"pointer"}}} className="d-flex mt-1 p-1 justify-content-between align-items-center">
        <Typography sx={{color:"#666666", fontWeight:"bold", fontSize:"13px"}}>Views on your post</Typography>
        <Typography sx={{color:"#2E7BCA", fontWeight:"semibold", fontSize:"14px"}}>953</Typography>
        </Box>


        <Divider className='mt-3' component="" variant='fullWidth' />
<Box sx={{ ":hover": { backgroundColor:"#EBEBEB", cursor:"pointer"}}} className="mt-2 p-1">
            <Typography sx={{ color: "#666666", fontWeight: "500", fontSize: "12px",textAlign:"start" }}>Strengthen your profile with an AI writing assistant</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px", display: "flex", alignItems: "center", marginTop: "3px", ":hover": { color:"#59BAEB!important"}}}> <img width={25} src="/imgs/General/linkedin-premium-chip.png" alt="" />Try premium for PKR0</Typography>
</Box>

        <Divider className='mt-3' component="" variant='fullWidth' />
<Box sx={{ ":hover": { backgroundColor:"#EBEBEB", cursor:"pointer"}}} className="mt-2 p-1">
            <Typography sx={{ color: "#666666", fontWeight: "bold", gap:"10px", fontSize: "12px", display: "flex", alignItems: "center" }}><iconify-icon icon="garden:bookmark-fill-12" width="12" height="12"></iconify-icon>Saved items</Typography>
</Box>
      </Box>
      </Box>

{/* SIDE BAR RECENT VIEW */}
<Box sx={{backgroundColor:"white", position:"relative", height:"220px"}} className="border-0 rounded-3 mt-3 p-3">
<h4>Recent</h4>

<Box className="mt-2 d-flex flex-column gap-2">
<Typography sx={{color:"#666666", fontWeight:"600", fontSize:"13px", display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", ":hover":{textDecoration:"underline"}}}><CodeIcon />programming</Typography>
<Typography sx={{color:"#666666", fontWeight:"600", fontSize:"13px", display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", ":hover":{textDecoration:"underline"}}}><PasswordIcon />system management</Typography>
<Typography sx={{color:"#666666", fontWeight:"600", fontSize:"13px", display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", ":hover":{textDecoration:"underline"}}}><GitHubIcon />github</Typography>
<Typography sx={{color:"#666666", fontWeight:"600", fontSize:"13px", display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", ":hover":{textDecoration:"underline"}}}><JavascriptIcon />javascript</Typography>
<Typography sx={{color:"#666666", fontWeight:"600", fontSize:"13px", display:"flex", alignItems:"center", gap:"8px", cursor:"pointer", ":hover":{textDecoration:"underline"}}}><DataArrayIcon />arrays</Typography>
</Box>
</Box>

    </div>
  )
}

export default LeftHome
