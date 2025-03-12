import { Box, Divider, IconButton, InputAdornment, InputBase, OutlinedInput, Paper, TextField } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { Link } from 'react-router-dom';
import "./navHome.css"
import SearchIcon from '@mui/icons-material/Search';

const NavHome = () => {
  return (
    <div className='bg-white'>
    <div className='container'>
      {/* LOGO AND SEARCH BAR */}
      <nav className='navBar align-items-center justify-content-between my-2'>
        <Box className="d-flex gap-2">
            <Box className="logoImg">
            <img width={40} src="/imgs/Logo/linkedin.png" alt="" />
            </Box>

          <Box sx={{width:"100%"}}>
              <OutlinedInput
                className='searchInput'
                placeholder='Search'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                size='small'
              />

          </Box>
        </Box>

        {/* ICONS */}
        <Box sx={{ color: "#666666" }} className="navIcons align-items-center gap-3">
            <Link to="/home" className='text-decoration-none text-black'>
            <Box sx={{ cursor: "pointer", ":hover": { color: "#191919!important", animation: "color 990ms ease" }, padding: "6px" }} className="d-flex flex-column align-items-center text-center">
            <HomeIcon sx={{ fontSize: "25px" }} />
            <small>Home</small>
          </Box>
            </Link>

          <Box sx={{cursor:"pointer", ":hover":{color:"#191919!important", animation:"color 990ms ease"}, padding:"6px"}} className="d-flex flex-column align-items-center text-center">
            <PeopleIcon sx={{ fontSize: "25px" }} />
            <small>Network</small>
          </Box>

          <Box sx={{cursor:"pointer", ":hover":{color:"#191919!important", animation:"color 990ms ease"}, padding:"6px"}} className="d-flex flex-column align-items-center text-center">
            <WorkIcon sx={{ fontSize: "25px" }} />
            <small>Jobs</small>
          </Box>

          <Box sx={{cursor:"pointer", ":hover":{color:"#191919!important", animation:"color 990ms ease"}, padding:"6px"}} className="d-flex flex-column align-items-center text-center">
            <SmsIcon sx={{ fontSize: "25px" }} />
            <small>Messaging</small>
          </Box>

          <Box sx={{cursor:"pointer", ":hover":{color:"#191919!important", animation:"color 990ms ease"}, padding:"6px"}} className="d-flex flex-column align-items-center text-center">
            <NotificationsIcon sx={{ fontSize: "25px" }} />
            <small>Notifications</small>
          </Box>
            <Link className='text-decoration-none text-black' to="/profile">
            <Box sx={{ cursor: "pointer", ":hover": { color: "#191919!important", animation: "color 0.3s ease-in-out" }, padding: "6px" }} className="d-flex flex-column align-items-center text-center">
            <img width={25} src="/imgs/User/Profile picture png.png" alt="" />
            <small className='d-flex align-items-center'>Me<iconify-icon icon="ri:arrow-down-s-fill" width={15} className="fs-2 cp"></iconify-icon></small>
          </Box>
</Link>
          <Divider orientation="vertical" variant="middle" flexItem />

            <Box sx={{ cursor: "pointer", ":hover": { color: "#191919!important", animation: "color 0.3s ease-in-out" }, padding: "6px" }} className="d-flex flex-column align-items-center text-center">
            <AppsIcon />
              <small className='d-flex align-items-center'>For Business<iconify-icon icon="ri:arrow-down-s-fill" width={15} className="cp"></iconify-icon></small>
          </Box>

          <Box sx={{ cursor: "pointer", ":hover": { color:"#191919!important", animation:"color 0.3s ease-in-out"}, padding:"6px"}} className="d-flex flex-column align-items-center text-center">
            <CrisisAlertIcon />
            <small className='d-flex align-items-center'>Adertise</small>
          </Box>

          </Box>

        </nav>

        {/* SMALL SCREEN NAV-BAR */}
        
        <nav className='smScreenNav'>
          {/* PROFILE IMAGE FOR SMALL SCREEN */}
          <Box className="logoProfileImg">
            <img width={50} src="/imgs/User/Profile picture.jpg" alt="" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <OutlinedInput
              className='searchInput'
              placeholder='Search'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size='small'
              />

          </Box>
              {/* MESSAGE ICON FOR SMALL SCREEN */}
          <Link className='text-decoration-none text-black'>
            <Box sx={{ cursor: "pointer", ":hover": { color: "#191919!important", animation: "color 990ms ease" }, padding: "6px" }} className="textIcon align-items-center text-center">
              <iconify-icon icon="mdi:chat-processing" style={{ color: "#191919!important" }} width="28" height="28"></iconify-icon>
            </Box>
          </Link>
        </nav>
    </div>
    </div>
  )
}

export default NavHome
