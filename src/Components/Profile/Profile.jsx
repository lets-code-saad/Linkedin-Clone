import { Grid2 } from '@mui/material'
import React from 'react'
import ProfileLeft from './Left/ProfileLeft'
import ProfileRight from './Right/ProfileRight'
import NavHome from '../Home/NavHome/NavHome'
import "./CSS/profilePage.css"

const Profile = () => {
  return (
      <div className='profilePage'>
          <div className='container'>
              <NavHome />
                  <Grid2 container gap={3}>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 8 }}>
              <ProfileLeft />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
              <ProfileRight />
          </Grid2>
              </Grid2>
          </div>
    </div>
  )
}

export default Profile
